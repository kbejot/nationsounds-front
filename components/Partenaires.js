import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {View, Text, StyleSheet, SafeAreaView, ScrollView} from 'react-native';

const api =
  'https://e7c7-2001-861-d36-f830-70f8-35e8-9d24-6eb9.ngrok-free.app/api/partenaires?page=1';

const Partenaires = () => {
  const [partenaires, setPartenaires] = useState([]);

  //requete api pour récupérer les partenaires

  useEffect(() => {
    axios
      .get(api, {headers: {accept: 'application/ld+json'}})
      .then(response => {
        if (response.data && response.data['hydra:member']) {
          setPartenaires(response.data['hydra:member']);
        }
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
      });
  }, []);

  //rendu des partenaires
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          {partenaires.map((partenaire, index) => (
            <Text key={index} style={style.title}>
              {partenaire.nom}
            </Text>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Partenaires;

const style = StyleSheet.create({
  title: {
    margin: 20,
    fontSize: 30,
    padding: 5,
    fontWeight: 'bold',
    lineHeight: 30,
    color: 'white',
  },
});
