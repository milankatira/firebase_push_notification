// Scripts for firebase and firebase messaging
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.0.0/firebase-messaging-compat.js');

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyBkARnawy7sShC6Gk4o6aQ0RW2Byx-HwoY",
  authDomain: "notification-c3562.firebaseapp.com",
  projectId: "notification-c3562",
  storageBucket: "notification-c3562.appspot.com",
  messagingSenderId: "1049303790168",
  appId: "1:1049303790168:web:22c15bec4193c8e65b102d",
  measurementId: "G-NMMG88JZL7"
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('Received background message ', payload);

  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
