import {Platform} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import PushNotification from 'react-native-push-notification';
import messaging from '@react-native-firebase/messaging';
import axios from 'axios';

async function Subscribe() {
  const deviceId = DeviceInfo.getDeviceId();
  const deviceToken = await messaging().getToken();

  //ajout du token de l'utilisateur pour les notifs push
  axios
    .post(
      'https://nationsoundsmspr.000webhostapp.com/wp-json/fcm/pn/subscribe',
      {
        rest_api_key:
          '9qqs3ro055:5694619qr_55qn5232oq4172777584_0373304o72r2s609o64pqo0s2op',
        device_uuid: deviceId,
        device_token: deviceToken,
        subscription: 'subscribe',
      },
    )
    .catch(function (error) {
      console.log(error);
    });

  /*

    // Subscribe device on app launch
const subscribeDevice = async (deviceId, deviceToken) => {
    try {
      const response = await axios.post('https://nationsoundsmspr.000webhostapp.com/wp-json/fcm/pn/subscribe', {
        device_id: deviceId,
        device_token: deviceToken,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Get device ID and device token
  const getDeviceIdAndToken = async () => {
    let deviceId = null;
    let deviceToken = null;
    try {
      deviceId = await messaging().getToken();
      deviceToken = await messaging().getAPNSToken(); // iOS only
      subscribeDevice(deviceId, deviceToken);
      console.log(deviceId)
    } catch (error) {
      console.error(error);
    }
  };

  getDeviceIdAndToken();


  */
}

export default Subscribe;
