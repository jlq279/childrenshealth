import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react';
import FirstScreen from './Components/FirstScreen';
import HomeScreen from './Components/HomeScreen';
import CameraScreen from './Components/CameraScreen';
import ShopScreen from './Components/ShopScreen';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { render } from 'react-dom';


import firebase from './firebase';

const store = firebase.firestore();

// store.collection("Asthma").onSnapshot(snapshot => {
//   var cities = [];
//     snapshot.forEach(function(doc) {
//         cities.push(doc.data());
//     });
//     console.log("Current: ", cities[0].level);
// })




store.collection("David").onSnapshot(snapshot => {
      var cities = [];
        snapshot.forEach(function(doc) {
            cities.push(doc.data());
        });
        console.log("Level: ", cities[5].Level);
        global.hero = cities[0];
    })

    //console.log(global.hero);

const res = store.collection('Asthma').doc('Mike O.').set({level: 6});



export default class App extends Component {
  
  
  state = {
    quests: []
  }
  addQuest = (quest) => {
    const quests = this.state.quests
    quests.push(quest)
    this.setState({cities})
  }
  addMethod = (method, quest) =>{
    const index = this.state.quests.findIndex(item => {
      return item.id == quest.id
    })
  
    const chosenQuest = this.state.quests[index]
    chosenQuest.method.push(method)
    const quests = [
    ...this.state.quests.slice(0, index),
    chosenQuest,
    ...this.state.quests.slice(index + 1)
  ]
  this.setState({
    quests
  })
} 

  render(){
    const Stack = createNativeStackNavigator();
    return(
      
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name = "FirstScreen"
          component={FirstScreen}
        />
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen name="CameraScreen" component={CameraScreen} />
        <Stack.Screen name="ShopScreen" component={ShopScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    )
    }
  }
