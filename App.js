import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import HomeScreen from './HomeScreen';
import CameraScreen from './CameraScreen';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';

// Import the functions you need from the SDKs you need
// const firebase = require('firebase/app');
import firebase from "firebase/app";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

import { getDatabase, ref, onValue } from 'firebase/database';
import fbdb from 'firebase/database';


function storeHighScore(userId, score) {
  Object.keys(fbdb).forEach(console.log)
  console.log('userId', userId)
  const db = fbdb.getDatabase();
  const reference = fbdb.ref(db, 'users/' + userId);
  set(fbdb.ref(db, 'users/' + userId), {
    highscore: score,
  });
}


const App = () => {
  storeHighScore('jimmy', 5);

  const Stack = createNativeStackNavigator();




  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen name="CameraScreen" component={CameraScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;