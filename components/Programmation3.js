import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView,} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';


function Programmation2() {
  const [prog, setProg] = useState([]);
  const [selectedCategory1, setSelectedCategory1] = useState(null);
  const [selectedCategory2, setSelectedCategory2] = useState(null);
  const [selectedCategory3, setSelectedCategory3] = useState(null);

  const [pickerUpdated, setPickerUpdated] = useState(false);

  useEffect(() => {
    if (pickerUpdated) {
      let api = 'http://nationsoundsmspr.000webhostapp.com//wp-json/wp/v2/posts?_embed&per_page=100';
  
      const categories = [];
      if (selectedCategory1) categories.push(selectedCategory1);
      if (selectedCategory2) categories.push(selectedCategory2);
      if (selectedCategory3) categories.push(selectedCategory3);
  
      if (categories.length > 0) {
        api += `&categories=${categories.join(",")}`;
      }
  
      axios.get(api).then((res) => {
        const filteredProg = res.data.filter((prog) => {
          const categoriesIds = prog.categories.map((cat) => cat.toString());
          return categories.every((cat) => categoriesIds.includes(cat));
        });
        setProg(filteredProg);
      });
    }
  }, [selectedCategory1, selectedCategory2, selectedCategory3, pickerUpdated]);
  
  const handleCategoryChange1 = (itemValue) => {
    setSelectedCategory1(itemValue);
    setPickerUpdated(true);
  };
  
  const handleCategoryChange2 = (itemValue) => {
    setSelectedCategory2(itemValue);
    setPickerUpdated(true);
  };
  
  const handleCategoryChange3 = (itemValue) => {
    setSelectedCategory3(itemValue);
    setPickerUpdated(true);
  };
 
  const renderPosts = () => {
    if (prog.length === 0) {
      return <Text>Aucun évènement prévu au moment selectionné</Text>;
    }

    const uniquePosts = prog.filter((post, index) => {
      return prog.findIndex((p) => p.id === post.id) === index;
    });

    return (
      <ScrollView>
        {uniquePosts.map((post) => (
          <View key={post.id}>
            <Text style={style.post}>{post.title.rendered}</Text>
          </View>
        ))}
      </ScrollView>
    );
  };

  return (
 
    
        <View>
          <Picker
            selectedValue={selectedCategory1}
            onValueChange={handleCategoryChange1}>
            <Picker.Item label="Scènes" value="0" />
            <Picker.Item label="Stage 1" value="8" />
            <Picker.Item label="Stage 2" value="9" />
            <Picker.Item label="Stage 3" value="10" />
          </Picker>
          <Picker
            selectedValue={selectedCategory2}
            onValueChange={handleCategoryChange2}>
            <Picker.Item label="Date" value="0"/>
            <Picker.Item label="Vendredi" value="17" />
            <Picker.Item label="Samedi" value="18" />
            <Picker.Item label="Dimanche" value="19" />
          </Picker>
   <Picker
            selectedValue={selectedCategory3}
            onValueChange={handleCategoryChange3}>
     <Picker.Item label="Horaires" value="0"/>
     <Picker.Item label="14h" value="20" />
     <Picker.Item label="15h" value="21" />
     <Picker.Item label="16h" value="22" />
     <Picker.Item label="17h" value="23" />
     <Picker.Item label="18h" value="24" />
     <Picker.Item label="19h" value="25" />
     <Picker.Item label="20h" value="26" />
     <Picker.Item label="21h" value="27" />
     <Picker.Item label="22h" value="28" />
     <Picker.Item label="23h" value="29" />
   </Picker>
   {renderPosts()}
        </View>

  );
}


export default Programmation2;

const style = StyleSheet.create ({
  post: {
    color:'grey',
   fontWeight: 'bold',
    fontSize: 25,
    marginHorizontal: 75,
    marginBottom: 15,
    marginTop: 20,
  }
})