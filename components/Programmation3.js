import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Linking,
  TouchableOpacity,
} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';

const api =
  'https://ad4c-2001-861-d36-f830-fcaf-970d-5558-63d1.ngrok-free.app/api/concerts?page=1';

const Programmation2 = () => {
  const [concerts, setConcerts] = useState([]);
  const [selectedScene, setSelectedScene] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);

  // Fetch concerts from API
  useEffect(() => {
    axios
      .get(api)
      .then(res => {
        setConcerts(res.data['hydra:member']);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
      });
  }, []);

  // Filter concerts based on selected filters
  const getFilteredConcerts = () => {
    return concerts.filter(concert => {
      if (selectedScene && concert.scene !== selectedScene) {
        return false;
      }
      if (selectedDate && !concert.Date.startsWith(selectedDate)) {
        return false;
      }
      if (
        selectedHour &&
        new Date(concert.Horaire).getUTCHours() !== parseInt(selectedHour, 10)
      ) {
        return false;
      }
      return true;
    });
  };

  const filteredConcerts = getFilteredConcerts();

  // Render filtered concerts
  const renderPosts = () => {
    if (filteredConcerts.length === 0) {
      return <Text>Aucun évènement prévu au moment sélectionné</Text>;
    }

    return filteredConcerts.map(concert => (
      <TouchableOpacity
        key={concert.id}
        onPress={() => Linking.openURL(concert['@id'])}
        style={style.postContainer}>
        <View style={style.timeContainer}>
          <Text style={style.hours}>
            {new Date(concert.Horaire).getUTCHours()}h
          </Text>
        </View>
        <View style={style.titleContainer}>
          <Text style={style.post}>{concert.artiste.name}</Text>
        </View>
      </TouchableOpacity>
    ));
  };

  return (
    <ScrollView>
      <View>
        <Picker
          selectedValue={selectedScene}
          onValueChange={value => setSelectedScene(value)}
          style={style.picker}>
          <Picker.Item label="Scènes" value={null} />
          <Picker.Item label="Scene 1" value="/api/scenes/2" />
          <Picker.Item label="Scene 2" value="/api/scenes/3" />
          <Picker.Item label="Scene 3" value="/api/scenes/4" />
        </Picker>
        <Picker
          selectedValue={selectedDate}
          onValueChange={value => setSelectedDate(value)}
          style={style.picker}>
          <Picker.Item label="Date" value={null} />
          <Picker.Item label="21/05/2024" value="2024-05-21" />
          <Picker.Item label="22/05/2024" value="2024-05-22" />
          <Picker.Item label="23/05/2024" value="2024-05-23" />
        </Picker>
        <Picker
          selectedValue={selectedHour}
          onValueChange={value => setSelectedHour(value)}
          style={style.picker}>
          <Picker.Item label="Horaires" value={null} />
          <Picker.Item label="15h" value="15" />
          <Picker.Item label="16h" value="16" />
          <Picker.Item label="17h" value="17" />
        </Picker>
        {renderPosts()}
      </View>
    </ScrollView>
  );
};

export default Programmation2;

//styles
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
  },
});
