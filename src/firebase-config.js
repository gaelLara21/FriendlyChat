/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyCNzMh3PoxcitV1T60NLXJmCjmMVVupKOw",
  authDomain: "friendlychat-1e5e0.firebaseapp.com",
  projectId: "friendlychat-1e5e0",
  storageBucket: "friendlychat-1e5e0.appspot.com",
  messagingSenderId: "167500507344",
  appId: "1:167500507344:web:4ff5a8b6181bef499596d5",
  measurementId: "G-QX4WWHLV7F"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}