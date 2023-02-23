import * as React from 'react';
import { Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import Maps from './components/Maps';
import HomeScreen from './components/HomeScreen';
import Informations from './components/Informations';
import Programmation from './components/Programmation';
import Programmation2 from './components/Programmation2';
import Test from './components/Test';
import Subscribe from './components/subscribe';


Subscribe();

const urlBilletterie = 'https://nationsoundsmspr.000webhostapp.com/billetterie/';
const urlFAQ = 'https://nationsoundsmspr.000webhostapp.com/faq/';
 


function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="FAQ"
        onPress={() => Linking.openURL(urlFAQ)}
      />
      <DrawerItem
        label="Billetterie"
        onPress={() => Linking.openURL(urlBilletterie) }
      />
  
    </DrawerContentScrollView>
  );
}


const Drawer = createDrawerNavigator();

export default function App() {

  return (
    <NavigationContainer>    
       <Drawer.Navigator
        useLegacyImplementation
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Infos" component={Informations} />
        <Drawer.Screen name="Pogrammation" component={Programmation} />
        <Drawer.Screen name="Maps" component={Maps} />
        <Drawer.Screen name="Pogrammation2" component={Programmation2} />
        <Drawer.Screen name="Test" component={Test} />
      </Drawer.Navigator>
    </NavigationContainer>
      
  );
}
/*
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Main Stage',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Fury Stage',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Electro Stage',
  },
];

const Item = ({title}) => (
  <View>
    <Text>{title}</Text>
  </View>
);

function HomeScreen({ navigation }) {
  const jumpToAction = DrawerActions.jumpTo('Profile', { user: 'Satya' });


  return (
    <View style={styles.container}>
      <Text style={styles.notif}>Zone Notifications</Text>
      <Test />
      <Text>PROGRAMMATION</Text>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
      <Text style={styles.billetterie}>BILLETTERIE</Text>
      <Maps />
    </View>
  );
}

function ProfileScreen({ route }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile!</Text>
      <Text>{route?.params?.user ? route.params.user : 'Noone'}'s profile</Text>
    </View>
  );
}


function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
      />
      <DrawerItem 
        label="Programmation"
      />
      <DrawerItem 
        label="Billetterie"
      />
      <DrawerItem 
        label="Map"
      />
      <DrawerItem 
        label="FAQ"
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Drawer.Navigator
        useLegacyImplementation
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Profile" component={ProfileScreen} />
      
        
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'dimgrey',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  map : {
    width: '100%'
  },
  billetterie: {
    width: '100%',
    height: '10%',
    backgroundColor: 'darkgrey',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 25,
  },
  notif: {
    backgroundColor: 'red',
    height: '5%',
    width: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
  }
})
*/