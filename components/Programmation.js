import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import {useNavigation} from '@react-navigation/native';

function HomeProg() {
  const [concerts, setConcerts] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    axios
      .get(
        'https://e7c7-2001-861-d36-f830-70f8-35e8-9d24-6eb9.ngrok-free.app/api/concerts?page=1',
      )
      .then(res => {
        setConcerts(res.data['hydra:member']);
      });
  }, []);

  const getRandomConcerts = count => {
    if (count > concerts.length) {
      count = concerts.length;
    }
    const shuffledConcerts = concerts.sort(() => Math.random() - 0.5);
    return shuffledConcerts.slice(0, count);
  };

  const randomConcerts = getRandomConcerts(5);

  return (
    <View style={styles.page}>
      <Text style={styles.titre}>A VENIR</Text>
      <TouchableOpacity onPress={handlePress}>
        <ScrollView>
          {randomConcerts.map(concert => (
            <Text style={styles.groupes} key={concert.id}>
              {concert.artiste}
            </Text>
          ))}
        </ScrollView>
      </TouchableOpacity>
    </View>
  );

  function handlePress() {
    navigation.navigate('Programmation');
  }
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#1B1B1B',
    padding: 10,
  },
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
    marginBottom: 10,
  },
});

export default HomeProg;
