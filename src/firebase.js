// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyCWLlFoESW_lZt-hTDisTacWL6-ClLUWdk',
  authDomain: 'clone-99a92.firebaseapp.com',
  projectId: 'clone-99a92',
  storageBucket: 'clone-99a92.appspot.com',
  messagingSenderId: '646433429284',
  appId: '1:646433429284:web:e5d49472cb11b5162a05b1',
  measurementId: 'G-H562G58HW6',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
