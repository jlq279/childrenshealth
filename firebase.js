import * as firebase from "firebase";
import "firebase/firebase-firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQcYQJ1rS3gJXRwBGju98AKpT7OSmtPM4",
  authDomain: "children-s-health-proje.firebaseapp.com",
  databaseURL: "https://children-s-health-proje-default-rtdb.firebaseio.com",
  projectId: "children-s-health-proje",
  storageBucket: "children-s-health-proje.appspot.com",
  messagingSenderId: "945921462289",
  appId: "1:945921462289:web:829833982a9b3286ac21b0",
  measurementId: "G-SL55CN02HH"
};

firebase.initializeApp(firebaseConfig);

export default firebase;