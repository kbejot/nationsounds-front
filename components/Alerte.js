import * as React from 'react';
import { View, Text, StyleSheet, SafeAreaView, ScrollView, Dimensions } from 'react-native';

export default class Alerte extends React.Component {
     constructor(props) {
        super(props);
        this.state = {
        }
     }render() {
        return (
           <SafeAreaView style={styles.container}>
           <View>         
           <ScrollView
              style={styles.notifScrollView}
              horizontal={true}
              pagingEnabled={true}
              showsHorizontalScrollIndicator={false}
           >
              <View style={styles.notifView}>
                 <Text>Notif 1</Text>
              </View>
              <View style={styles.notifView}>
                 <Text>Notif 2</Text>
              </View>
              <View style={styles.notifView}>
                 <Text>Notif 3</Text>
              </View>
           </ScrollView>
        </View>      
           </SafeAreaView>
        );
     }
  }

  const styles = StyleSheet.create({
     container: {
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '10%',
     },
     notifScrollView: {
          flex: 1,
          width:Dimensions.get('screen').width
       },
     notifView: {
          flex: 1,
          width:Dimensions.get('screen').width,
          justifyContent:'center',
          alignItems:'center'
       }
  });