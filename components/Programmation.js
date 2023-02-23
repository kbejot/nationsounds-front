import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View, StyleSheet} from 'react-native';
import axios from 'axios';






const API = 'http://nationsoundsmspr.000webhostapp.com//wp-json/wp/v2/posts/';

function Test () {

  const [test, setTest] = useState([]);

 
  useEffect(() => {
    axios.get(API)
      .then((res) => {
        setTest(res.data);
      });
  }, []);

  const progStage1 = test.map((test) => {
      const categories = test.categories
      for (let i=0; i<categories.length; i++){
        if (categories[i] == 8) {
          console.log(test.title)
          return (<Text style={styles.groupes} key={test.id}>{test.title.rendered}</Text>)
        }  
      }
  })

  const progStage2 = test.map((test) => {
    const categories = test.categories
    for (let i=0; i<categories.length; i++){
      if (categories[i] == 9) {
        console.log(test.title)
        return (<Text style={styles.groupes} key={test.id}>{test.title.rendered}</Text>)
      }  
    }
})
const progStage3 = test.map((test) => {
  const categories = test.categories
  for (let i=0; i<categories.length; i++){
    if (categories[i] == 10) {
      console.log(test.title)
      return (<Text style={styles.groupes} key={test.id}>{test.title.rendered}</Text>)
    }  
  }
})


  return(
    <View style={styles.page}>
        <Text style={styles.titre}>STAGE 1</Text>
        {progStage1}
        <Text style={styles.titre}>STAGE 2</Text>
        {progStage2}
        <Text style={styles.titre}>STAGE 3</Text>
        {progStage3}
    </View>
  )

}

export default Test;

const styles = StyleSheet.create({
  
  titre: {
    textAlign: 'center',
    color: '#FBFB79',
    fontSize: 35,
    fontWeight: 'bold',
    marginVertical: 8,
    fontFamily: 'Audiowide' 
  },
  groupes: {
    flexDirection: 'column',
    textAlign: 'center',
    fontSize: 20,
    fontStyle: 'italic',
    color: 'white'
  },
  page: {
    backgroundColor: '#121212',
  },
});