import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Dimensions, FlatList } from 'react-native';
import axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


const API = 'http://nationsoundsmspr.000webhostapp.com//wp-json/wp/v2/posts/?per_page=100';



function Alerte () {
   const [HomeAlerte, setHomeAlerte] = useState([]);
   const navigation = useNavigation();

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
              showsHorizontalScrollIndicator={true}
           >
            {alerte}
           </ScrollView>
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