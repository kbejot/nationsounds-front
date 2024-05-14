import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, ScrollView, Linking, TouchableOpacity } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';

function Programmation2() {
  const [concerts, setConcerts] = useState([]);
  const [selectedScene, setSelectedScene] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedHour, setSelectedHour] = useState(null);

  // Fetch all concerts on initial mount
  useEffect(() => {
    axios.get('http://192.168.1.14:8000/api/concerts?page=1')
      .then((res) => {
        setConcerts(res.data["hydra:member"]);
      });
  }, []);

  // Function to filter concerts
  const getFilteredConcerts = () => {
    return concerts.filter(concert => {
      if (selectedScene && concert.scene !== selectedScene) {
        return false;
      }
      if (selectedDate && concert.Date !== selectedDate + "T00:00:00+00:00") {
        return false;
      }
      if (selectedHour && new Date(concert.Horaire).getUTCHours() !== parseInt(selectedHour, 10)) {
        return false;
      }
      return true;
    });
  };
  const renderPosts = () => {
    if (concerts.length === 0) {
      return <Text>Aucun évènement prévu au moment selectionné</Text>;
    }
  }

  const filteredConcerts = getFilteredConcerts();

  return (
    <ScrollView>
      <View>
        <Picker
          selectedValue={selectedScene}
          onValueChange={(value) => setSelectedScene(value)}
          style={style.picker}
        >
          <Picker.Item label="Scènes" value={null} />
          <Picker.Item label="Scene 1" value="1" />
          <Picker.Item label="Scene 2" value="2" />
          <Picker.Item label="Scene 3" value="3" />
        </Picker>
        <Picker
          selectedValue={selectedDate}
          onValueChange={(value) => setSelectedDate(value)}
          style={style.picker}
        >
          <Picker.Item label="Date" value={null} />
          <Picker.Item label="2023-09-05" value="2023-09-05" />
          <Picker.Item label="2023-09-06" value="2023-09-06" />
          <Picker.Item label="2023-09-07" value="2023-09-07" />
        </Picker>
        <Picker
          selectedValue={selectedHour}
          onValueChange={(value) => setSelectedHour(value)}
          style={style.picker}
        >
          <Picker.Item label="Horaires" value={null} />
          <Picker.Item label="16h" value="15" />
          <Picker.Item label="17h" value="16" />
          <Picker.Item label="18h" value="17" />
        </Picker>
        {filteredConcerts.map((concert) => (
          <TouchableOpacity
            key={concert.id}
            onPress={() => Linking.openURL(concert["@id"])}
            style={style.postContainer}
          >
            <View style={style.timeContainer}>
              <Text style={style.hours}>
                {new Date(concert.Horaire).getHours()}h
              </Text>
            </View>
            <View style={style.titleContainer}>
              <Text style={style.post}>{concert.Artiste}</Text>
            </View>
            {renderPosts()}
          </TouchableOpacity>
        ))}
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
  },
});
