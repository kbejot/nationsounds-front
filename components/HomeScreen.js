import * as React from 'react';
import { Linking } from 'react-native';
import { View, Button, Text, Image, StyleSheet, FlatList } from 'react-native';
import Alerte from './Alerte';
import Programmation from './Programmation';
import Informations from './Informations';



const urlBilletterie = 'https://nationsoundsmspr.000webhostapp.com/billetterie/'


function HomeScreen() {
  return (
    <View>
      <Alerte />
      <Programmation />
      <Text onPress={() => Linking.openURL(urlBilletterie) } style={styles.billetterie}>Billetterie</Text>
      <Informations />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  billetterie: {
    backgroundColor: 'white',
    borderWidth: 2,
     textAlign: 'center',
     textAlignVertical: 'center',
     fontSize: 30,
     width: '100%',
     height: '10%',
  }
});
