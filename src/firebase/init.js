import firebase from 'firebase'
import firestore from 'firebase/firestore'
console.log(firestore)

const firebaseConfig = {
  apiKey: "AIzaSyC86dDX7Ja7Tq5P7CU09Q2zFlOo6Pweuo0",
  authDomain: "login-2e378.firebaseapp.com",
  databaseURL: "https://login-2e378.firebaseio.com",
  projectId: "login-2e378",
  storageBucket: "login-2e378.appspot.com",
  messagingSenderId: "53615729799",
  appId: "1:53615729799:web:5cb83281099941836b6c22",
  measurementId: "G-71S2GFPF0L"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
firebaseApp.firestore().settings({ timestampsInSnapshots:true })

export default firebaseApp.firestore();