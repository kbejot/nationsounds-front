import React, {useState, useEffect} from 'react';
import {Text, Image, View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import MapView, { Marker, Callout } from 'react-native-maps';

const Carte = () => {
  const allTypes = ['scene', 'buvette', 'toilettes', 'nuit', 'dedicaces', 'tous'];
  const [selectedTypes, setSelectedTypes] = useState([]);

  
const types = [
  { label: 'Scènes', value: 'scene' },
  { label: 'Buvettes', value: 'buvette' },
  { label: 'Toilettes', value: 'toilettes' },
  { label: 'Espace nuit', value: 'nuit' },
  { label: 'Dédicaces', value: 'dedicaces' },
];


    
  const marqueurs = [
    {
      latlng: {
        latitude: 48.85847192565891,
        longitude: 2.207039594650269,
      },
      description: 'Scène 1',
      image: require('../assets/img/music.png'),
      type: 'scene',
    },
    {
      latlng: {
        latitude: 48.85981306626015,
        longitude: 2.20126748085022,
      },
      description: 'Scène 2',
      image: require('../assets/img/music.png'),
      type: 'scene',
    },
    {
      latlng: {
        latitude: 48.85597307311367,
        longitude: 2.2043573856353764,
      },
      description: 'Scène 3',
      image: require('../assets/img/music.png'),
      type: 'scene',
    },
    {
      latlng: {
        latitude: 48.85804840010877,
        longitude: 2.201675176620484,
      },
      description: 'Buvette 1',
      image: require('../assets/img/food.png'),
      type: 'buvette',
    },
    {
      latlng: {
        latitude: 48.85640742534915,
        longitude: 2.1993899345397954,
      },
      description: 'Scène 4',
      image: require('../assets/img/music.png'),
      type: 'scene',
    },
    {
      latlng: {
        latitude: 48.85428967442484,
        longitude: 2.204668521881104,
      },
      description: 'Buvette 2',
      image: require('../assets/img/food.png'),
      type: 'buvette',
    },
    {
        latlng: {
          latitude: 48.8571261718558,
          longitude: 2.207691371440888,
        },
        description: 'Toilettes 1',
        image: require('../assets/img/toilettes.png'),
        type: 'toilettes',
      },
      {
        latlng: {
          latitude: 48.85866956968932,
          longitude: 2.1987140178680424,
        },
        description: 'Toilettes 2',
        image: require('../assets/img/toilettes.png'),
        type: 'toilettes',
      },
      {
        latlng: {
          latitude: 48.86009540707101,
          longitude: 2.196954488754273,
        },
        description: 'Espace nuit',
        image: require('../assets/img/tente.png'),
        type: 'nuit',
      },
      {
        latlng: {
          latitude: 48.85381294751467,
          longitude: 2.2026622295379643,
        },
        description: 'Dédicaces',
        image: require('../assets/img/star.png'),
        type: 'dedicaces',
      },
  ];
  

  const filteredMarqueurs = selectedTypes.length === 0 ? marqueurs : marqueurs.filter(marqueur => selectedTypes.includes(marqueur.type));

  return (
    <>
 <Picker
 style={style.picker}
  selectedValue={selectedTypes}
  onValueChange={(value) =>
    setSelectedTypes(value === "Tous les types" ? allTypes : value)
  }
>
  <Picker.Item label="Tous les types" value="Tous les types" />
  {types.map((type) => (
    <Picker.Item key={type.value} label={type.label} value={type.value} />
  ))}
</Picker>

<MapView
  style={{ flex: 1, marginTop: 30 }}
  mapType="terrain"
  showsUserLocation={true}
  initialRegion={{
    latitude: 48.85817545815007,
    longitude: 2.2031772136688237,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  }}
>
  {selectedTypes.includes("Tous les types")
    ? marqueurs.map(({ latlng, description, image }, index) => (
        <Marker key={index} coordinate={latlng}>
          <Image
            style={{ marginHorizontal: 10, width: 30, height: 30 }}
            source={image}
          />
          <Callout>
            <Text style={{ color: "red" }}>{description}</Text>
          </Callout>
        </Marker>
      ))
    : filteredMarqueurs.map(({ latlng, description, image }, index) => (
        <Marker key={index} coordinate={latlng}>
          <Image
            style={{ marginHorizontal: 10, width: 30, height: 30 }}
            source={image}
          />
          <Callout>
            <Text style={{ color: "red" }}>{description}</Text>
          </Callout>
        </Marker>
      ))}
</MapView>

          </>)
          };
          
          export default Carte;

const style = StyleSheet.create ({
  picker: {
    color: 'rgb(251, 251, 121)',
  }
})