import React, {useEffect, useState} from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Dimensions, FlatList } from 'react-native';
import axios from 'axios';

const API = 'http://nationsoundsmspr.000webhostapp.com//wp-json/wp/v2/posts/?per_page=100';

function AlerteDetail () {
   const [HomeAlerte, setHomeAlerte] = useState([]);

 
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
         <View>
         <Text key={HomeAlerte.id}>{HomeAlerte.title.rendered}</Text>
         <Text>{HomeAlerte.content.rendered}</Text>
         </View>
        )
      }  
    }
})

        return (
           <SafeAreaView>
                {alerte}    
           </SafeAreaView>
        );
}
export default AlerteDetail;