import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, Linking, TouchableOpacity} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';


function Programmation2() {
  const [prog, setProg] = useState([]);
  const [selectedStage, setselectedStage] = useState("7");
  const [selectedDate, setselectedDate] = useState("7");
  const [selectedHour, setselectedHour] = useState("7");
  const [categories, setCategories] = useState([]);
  const [filterShow, setFilterShow] = useState(false);

  
useEffect(() => {
  axios
    .get('http://nationsoundsmspr.000webhostapp.com//wp-json/wp/v2/categories')
    .then((res) => setCategories(res.data))
}, []);
  

  const [pickerUpdated, setPickerUpdated] = useState(true);

  useEffect(() => {
    if (pickerUpdated) {
      let api = 'http://nationsoundsmspr.000webhostapp.com//wp-json/wp/v2/posts?_embed&per_page=100';
  
      const categories = [];
      if (selectedStage) categories.push(selectedStage);
      if (selectedDate) categories.push(selectedDate);
      if (selectedHour) categories.push(selectedHour);
  
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
  }, [selectedStage, selectedDate, selectedHour, pickerUpdated]);
  
  const selectStage = (itemValue) => {
    setselectedStage(itemValue);
    setPickerUpdated(true);
  };
  
  const selectDate = (itemValue) => {
    setselectedDate(itemValue);
    setPickerUpdated(true);
  };
  
  const selectHour = (itemValue) => {
    setselectedHour(itemValue);
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
          <TouchableOpacity
            key={post.id}
            onPress={() => Linking.openURL(post.link)}
            style={style.postContainer}
          >
            <View style={style.timeContainer}>
              {post.categories.map((categoryId) => {
                const category = categories.find((cat) => cat.id === categoryId);
                if (category) {
                  return <Text key={category.id} style={style.hours}>{category.name}</Text>;
                }
              })}
            </View>
            <View style={style.titleContainer}>
              <Text style={style.post}>{post.title.rendered}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
            }    
    
  return (
 
    <ScrollView>
          <View>
          <Picker
            selectedValue={selectedStage}
            onValueChange={selectStage}
            style={style.picker}>
            <Picker.Item label="Scènes" value="7" />
            <Picker.Item label="Stage 1" value="8" />
            <Picker.Item label="Stage 2" value="9" />
            <Picker.Item label="Stage 3" value="10" />
          </Picker>
          <Picker
            selectedValue={selectedDate}
            onValueChange={selectDate}
            style={style.picker}>
            <Picker.Item label="Date" value="7"/>
            <Picker.Item label="Vendredi" value="17" />
            <Picker.Item label="Samedi" value="18" />
            <Picker.Item label="Dimanche" value="19" />
          </Picker>
   <Picker
            selectedValue={selectedHour}
            onValueChange={selectHour}
            style={style.picker}>
     <Picker.Item label="Horaires" value="7"/>
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

    </ScrollView>
    
  );
}


export default Programmation2;


const style = StyleSheet.create({
  postContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    marginTop: 20,
  },
  timeContainer: {
    flex: 1,
    marginRight: 10,
  },
  titleContainer: {
    flex: 4,
  },
  post: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 25,
    paddingLeft: 10,
  },
  hours: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 30,
  },
   picker: {
    color: 'rgb(251, 251, 121)',
  }
});
