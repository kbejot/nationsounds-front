import * as React from 'react';
import { Linking } from 'react-native';
import { View, Button, Text, Image, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Alerte from './Alerte';
import Programmation from './Programmation';
import Informations from './Informations';
import HomeMap from './HomeMap';
import { TouchableOpacity } from 'react-native-gesture-handler';



const urlBilletterie = 'https://nationsoundsmspr.000webhostapp.com/billetterie/'


function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Alerte />
      <Programmation />
      <Text onPress={() => Linking.openURL(urlBilletterie) } style={styles.billetterie}>Billetterie</Text>
      <Informations />

      <HomeMap style={styles.map} />

      
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  billetterie: {
    backgroundColor: 'rgb(29, 28, 33)',
    borderWidth: 2,
    borderColor: 'rgb(251, 251, 121)',
     color: 'rgb(251, 251, 121)',
     textAlign: 'center',
     textAlignVertical: 'center',
     fontSize: 30,
     width: '100%',
     height: '10%',
     marginBottom: 2,
     fontFamily: 'Audiowide-Regular'
  },
  map: {
    width: '100%',
    height: '100%'
  },
  container: {
    flex: 1,
  }
});
