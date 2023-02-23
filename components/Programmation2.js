import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import { Picker } from "@react-native-picker/picker";
import axios from 'axios';


const API = 'http://nationsoundsmspr.000webhostapp.com//wp-json/wp/v2/posts/?per_page=100';

function Programmation2 () {
  const [prog, setProg] = useState([]);
  const [filterShow, setFilterShow] = useState(false);
  const [selectedStage, setSelectedStage] = useState();
  const [selectedDate, setSelectedDate] = useState();
  const [selectedHour, setSelectedHour] = useState();
  const [selectedType, setSelectedType] = useState();

  
  useEffect(() => {
    axios.get(API)
      .then((res) => {
        setProg(res.data);
      });
  }, []);

  const programmation = prog.map((programmation) => console.log(programmation.id)  )

    return (
<View>
      <Text onPress={() => setFilterShow(!filterShow)}>Filtres</Text>
          
      {filterShow ? (
        <View >
        <Picker
     selectedValue={selectedStage}
     onValueChange={(itemValue, itemIndex) =>
       setSelectedStage(itemValue)
     }>
     <Picker.Item label="Scenes" value="27" />
     <Picker.Item label="Stage 1" value="8" />
     <Picker.Item label="Stage 2" value="9" />
     <Picker.Item label="Stage 3" value="10" />
   </Picker>
   <Picker
     selectedValue={selectedDate}
     onValueChange={(itemValue, itemIndex) =>
       setSelectedDate(itemValue)
     }>
     <Picker.Item label="Date" value="31" />
     <Picker.Item label="Vendredi" value="17" />
     <Picker.Item label="Samedi" value="18" />
     <Picker.Item label="Dimanche" value="19" />
   </Picker>
   <Picker
     selectedValue={selectedHour}
     onValueChange={(itemValue, itemIndex) =>
       setSelectedHour(itemValue)
     }>
     <Picker.Item label="Horaires" value="30" />
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
   <Picker
     selectedValue={selectedType}
     onValueChange={(itemValue, itemIndex) =>
       setSelectedType(itemValue)
     }>
     <Picker.Item label="Types" value="All Types" />
     <Picker.Item label="Concerts" value="1" />
     <Picker.Item label="Animations" value="2" />
   </Picker>
       </View>
      ) : null}     

    </View> 
    );


}

export default Programmation2;