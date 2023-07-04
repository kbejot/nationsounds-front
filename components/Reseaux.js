import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Linking, useWindowDimensions} from 'react-native';
import RenderHTML from 'react-native-render-html';


const api = "https://nationsoundsmspr.000webhostapp.com/wp-json/wp/v2/posts/52"
const RS = () => {
    const [res, setres] = useState({});
    const { width } = useWindowDimensions();
  
    useEffect(() => {
      axios.get(api)
        .then(res => {
          setres(res.data);
          // console.log(res.content); 
        })
    }, []);
  
  
    return (
      <SafeAreaView>
          <ScrollView>
               <View>
      {res && res.title && (
        <Text style={style.title}>
          {res.title.rendered}
        </Text>
      )}
  {res && res.content && (
    
        <RenderHTML
       source={{html:res.content.rendered}}
       style={{ width }}
        scalesPageToFit={false}
        tagsStyles={{
            img: {
                display:'flex', flexDirection:'row', alignItems:'center', marginBottom:-35,
            },
            a: {   color:'grey',
                    marginLeft: 75,
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
  

export default RS;

const style = StyleSheet.create ({
  title: {
    margin: 20,
    fontSize: 30,
    padding:5,
    fontStyle: 'bold',
    lineHeight: 30,
    color: 'white',
  },
})