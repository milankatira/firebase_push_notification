import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from "firebase/messaging";

var firebaseConfig = {
  apiKey: "AIzaSyBkARnawy7sShC6Gk4o6aQ0RW2Byx-HwoY",
  authDomain: "notification-c3562.firebaseapp.com",
  projectId: "notification-c3562",
  storageBucket: "notification-c3562.appspot.com",
  messagingSenderId: "1049303790168",
  appId: "1:1049303790168:web:22c15bec4193c8e65b102d",
  measurementId: "G-NMMG88JZL7"
};

const firebaseApp = initializeApp(firebaseConfig);
const messaging = getMessaging(firebaseApp);

export const fetchToken = (setTokenFound) => {
  return getToken(messaging, {vapidKey: 'BOXtp1Duyao_DqnoB3V2DPD6WmLbSKrpwd9jCE38MOmXsgV8CZYqgAL802d_W8MGG5iyIJeJ3YwVjZlGyeYyLSo'}).then((currentToken) => {
    if (currentToken) {
      console.log('current token for client: ', currentToken);
      setTokenFound(true);
      // Track the token -> client mapping, by sending to backend server
      // show on the UI that permission is secured
    } else {
      console.log('No registration token available. Request permission to generate one.');
      setTokenFound(false);
      // shows on the UI that permission is required 
    }
  }).catch((err) => {
    console.log('An error occurred while retrieving token. ', err);
    // catch error while creating client token
  });
}

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      resolve(payload);
    });
});