import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

function HomeProg() {
  const [concerts, setConcerts] = useState([]);
  const [error, setError] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    axios
      .get(
        'https://ad4c-2001-861-d36-f830-fcaf-970d-5558-63d1.ngrok-free.app/api/concerts?page=1',
      )
      .then(res => {
        setConcerts(res.data['hydra:member']);
      })
      .catch(err => {
        setError("Error fetching concerts: " + err.message);
      });
  }, []);

  const getRandomConcerts = count => {
    if (count > concerts.length) {
      count = concerts.length;
    }
    const shuffledConcerts = [...concerts].sort(() => Math.random() - 0.5);
    return shuffledConcerts.slice(0, count);
  };

  const randomConcerts = getRandomConcerts(5);

  const handlePress = () => {
    navigation.navigate('Programmation');
  };

  return (
    <View style={styles.page}>
      <Text style={styles.titre}>A VENIR</Text>
      {error ? (
        <Text style={styles.error}>{error}</Text>
      ) : (
        <TouchableOpacity onPress={handlePress}>
          <ScrollView>
            {randomConcerts.map(concert => (
              <Text style={styles.groupes} key={concert.id}>
                {concert.artiste.name} {/* Adjust this line based on the actual data structure */}
              </Text>
            ))}
          </ScrollView>
        </TouchableOpacity>
      )}
    </View>
  );
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
  error: {
    color: 'red',
    textAlign: 'center',
    marginVertical: 10,
  },
});

export default HomeProg;
