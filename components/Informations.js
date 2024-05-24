import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from 'react-native';

export default class Informations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <ScrollView
            style={styles.notifScrollView}
            horizontal={true}
            pagingEnabled={true}
            showsHorizontalScrollIndicator={true}>
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
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '10%',
    borderWidth: 2,
    borderColor: 'rgb(29, 28, 33)',
  },
  notifScrollView: {
    flex: 1,
    width: Dimensions.get('screen').width,
  },
  notifView: {
    flex: 1,
    width: Dimensions.get('screen').width,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
