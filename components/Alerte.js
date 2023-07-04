import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { Pagination } from 'react-native-snap-carousel';
import axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


const API = 'http://nationsoundsmspr.000webhostapp.com//wp-json/wp/v2/posts/?per_page=100';



function Alerte () {
   const [HomeAlerte, setHomeAlerte] = useState([]);
   const navigation = useNavigation();
   const [currentPage, setCurrentPage] = useState(0);
   let PageCount = 0;

   function handlePress() {
      navigation.navigate('Alertes')
   }
 
useEffect(() => {
  axios.get(API)
    .then((res) => {
      setHomeAlerte(res.data);
    });
}, []);

const alerte = HomeAlerte.map((HomeAlerte) => {
    const categories = HomeAlerte.categories
    for (let i=0; i<categories.length; i++){
      if (categories[i] == 34) {
        console.log(HomeAlerte.title)
        PageCount++
        return (
         <View style={styles.notifView}>
         <TouchableOpacity onPress={handlePress}>
         <Text key={HomeAlerte.id}>{HomeAlerte.title.rendered}</Text>
         </TouchableOpacity>
         </View>
        )
      }  
    }
})

        return (
           <SafeAreaView style={styles.container}>
           <View>         
           <ScrollView
              style={styles.notifScrollView}
              horizontal={true}
              pagingEnabled={true}
              onScroll={(event) => {
               const pageWidth = Dimensions.get('window').width;
               const currentPage = Math.round(
                 event.nativeEvent.contentOffset.x / pageWidth
               );
               setCurrentPage(currentPage);
             }}
           >
            {alerte}
           </ScrollView>
           <Pagination
  dotsLength={PageCount}
  activeDotIndex={currentPage}
  containerStyle={{ paddingTop: 8, paddingBottom: 16 }}
  dotStyle={{
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: 'rgba(251, 251, 121, 0.92)',
  }}
  inactiveDotOpacity={0.4}
  inactiveDotScale={0.6}
/>

        </View>      
           </SafeAreaView>
        );
}
export default Alerte;


     
  

  const styles = StyleSheet.create({
     container: {
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '10%',
     },
     notifScrollView: {
          flex: 1,
          width:Dimensions.get('screen').width
       },
     notifView: {
          flex: 1,
          width:Dimensions.get('screen').width,
          justifyContent:'center',
          alignItems:'center'
       }
  });