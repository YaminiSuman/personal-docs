import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyATlzNcxo5wVKZ8TtqSc2usDBzsxHOfQW4",
    authDomain: "my-docs-app.firebaseapp.com",
    projectId: "my-docs-app",
    storageBucket: "my-docs-app.appspot.com",
    messagingSenderId: "359771644117",
    appId: "1:359771644117:web:132086e09a77f1e4c0425c"
  };

  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig):firebase.app();
  const db = app.firestore();

  export {db}