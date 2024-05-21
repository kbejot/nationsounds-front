import * as React from 'react';
import {Linking} from 'react-native';
import {
  View,
  Button,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Alerte from './Alerte';
import Programmation from './Programmation';
import Informations from './Informations';
import HomeMap from './HomeMap';

const urlBilletterie =
  'https://e7c7-2001-861-d36-f830-70f8-35e8-9d24-6eb9.ngrok-free.app/billeterie';

function HomeScreen() {
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Programmation style={styles.prog} />

        <Text
          onPress={() => Linking.openURL(urlBilletterie)}
          style={styles.billetterie}>
          Billetterie
        </Text>

        <Informations />

        <View style={styles.mapContainer}>
          <HomeMap style={styles.map} />
        </View>
      </SafeAreaView>
    </ScrollView>
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
    fontFamily: 'Audiowide-Regular',
  },
  mapContainer: {
    flex: 1,
    height: 400, // ajustez la hauteur en fonction de vos besoins
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  prog: {
    flex: 1,
    height: 50,
  },
  notif: {},
});
