import 'react-native-gesture-handler';
import * as React from 'react';
import { Linking } from 'react-native';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import Maps from './components/Maps';
import HomeScreen from './components/HomeScreen';
import Informations from './components/Informations';
import Programmation from './components/Programmation';
import Programmation3 from './components/Programmation3';
import Subscribe from './components/subscribe';
import Partenaires from './components/Partenaires';
import AlerteDetail from './components/AlerteDetail';
import Reseaux from './components/Reseaux'
import { color } from 'react-native-reanimated';


Subscribe();

const urlBilletterie = 'http://192.168.1.14:8000/billeterie';
const urlFAQ = 'http://192.168.1.14:8000/faq';
 


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
const MyTheme = {
  dark: true,
  colors: {
    primary: 'rgb(251, 251, 121)',
    background: 'rgb(29, 28, 33)',
    card: 'rgb(29, 28, 33)',
    text: 'rgb(251, 251, 121)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};

export default function App() {

  return (
    <NavigationContainer theme={MyTheme}>    
       <Drawer.Navigator
        useLegacyImplementation
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={{
          headerStyle: {
            backgroundColor: 'rgb(29, 28, 33)',
          },
          headerTintColor: 'rgb(251, 251, 121)',
          headerTitleStyle: {
            fontFamily: 'Audiowide-Regular'
          },
        }}
         
        >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Alertes" component={AlerteDetail} />
        <Drawer.Screen name="Infos" component={Informations} />
        <Drawer.Screen name="Maps" component={Maps} />
        <Drawer.Screen name="Programmation" component={Programmation3} />
        <Drawer.Screen name="Partenaires" component={Partenaires} />
        <Drawer.Screen name="Réseaux Sociaux" component={Reseaux} />
      </Drawer.Navigator>
    </NavigationContainer>
      
  );
}