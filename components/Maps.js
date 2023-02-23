import React from 'react';
import MapView from 'react-native-maps';

const Carte = () => {
  return (
    <MapView
      style={{flex: 1, height:20,}}
      mapType="standard"
      customMapStyle={openStreetMapStyle}
      initialRegion={{
        latitude: 48.8583701,
          longitude: 2.2944813,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
      }}
    />
  );
};

const openStreetMapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "red"
      }
    ]
  },
  // ...
];

export default Carte;


