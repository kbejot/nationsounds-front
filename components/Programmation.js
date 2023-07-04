import React, { useState, useEffect } from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';


function HomeProg () {
  const [posts, setPosts] = useState([]);
  
  const navigation = useNavigation();
  function handlePress() {
    navigation.navigate('Programmation')
 }


  useEffect(() => {
    axios.get('http://nationsoundsmspr.000webhostapp.com//wp-json/wp/v2/posts?categories=7')
      .then((res) => {
        setPosts(res.data);
      });
  }, []);

  const getRandomPosts = (count) => {
    if (count > posts.length) {
      count = posts.length;
    }
    const shuffledPosts = posts.sort(() => Math.random() - 0.5);
    return shuffledPosts.slice(0, count);
  };

  const randomPosts = getRandomPosts(5);

  const progStage1 = randomPosts.map((post) => {
    return (
   
    <Text style={styles.groupes} key={post.id}>{post.title.rendered}</Text>
    
    );
  });



  return(
    
    <View style={styles.page}>
        <Text style={styles.titre}>A VENIR</Text>
        <TouchableOpacity onPress={handlePress}>
        <ScrollView>
             {progStage1}
        </ScrollView>
        </TouchableOpacity>
    </View>
  )

}

export default HomeProg;

const styles = StyleSheet.create({
  
  titre: {
    textAlign: 'center',
    color: '#FBFB79',
    fontSize: 35,
    marginVertical: 8,
    fontFamily: 'Audiowide-Regular',
  },
  groupes: {
    flexDirection: 'column',
    textAlign: 'center',
    fontSize: 20,
    fontStyle: 'italic',
    color: 'white',
    marginBottom:10,
  },
});