import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Linking, useWindowDimensions} from 'react-native';
import RenderHTML from 'react-native-render-html';


const api = "https://nationsoundsmspr.000webhostapp.com/wp-json/wp/v2/posts/50"

const Partenaires = () => {
    const [part, setpart] = useState({});
    const { width } = useWindowDimensions();
  
    useEffect(() => {
      axios.get(api)
        .then(part => {
          setpart(part.data);
          // console.log(part.content);
        })
    }, []);
  
  
    return (
      <SafeAreaView>
          <ScrollView>
               <View>
      {part && part.title && (
        <Text style={style.title}>
          {part.title.rendered}
        </Text>
      )}
  {part && part.content && (
    
        <RenderHTML
       source={{html:part.content.rendered}}
       style={{ width }}
        tagsStyles={{
            img: {
                display:'flex', flexDirection:'row', alignItems:'center', marginLeft:250, marginBottom:-35,
            },
            a: {   color:'grey',
                    marginLeft: 50,
                    marginBottom:20,
                    fontSize: 25,
                    fontStyle: 'italic',
                    textDecorationLine:'none',
                },
        }}
        onLinkPress={( href) => { Linking.openURL(href) }}
      /> 
    
     
    )}
    </View> 
          </ScrollView>
      </SafeAreaView>
    
    );
  };
  

export default Partenaires;

const style = StyleSheet.create ({
  title: {
    margin: 20,
    fontSize: 30,
    padding:5,
    fontStyle: 'bold',
    lineHeight: 30,
    color: 'black',
  },
})