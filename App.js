import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { Component } from 'react';
import FirstScreen from './Components/FirstScreen';
import HomeScreen from './Components/HomeScreen';
import CameraScreen from './Components/CameraScreen';
import StatusUpdates from './Components/StatusUpdates';
import VisualizeDiagnosis from './Components/VisualizeDiagnosis';
import ShopScreen from './Components/ShopScreen';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { render } from 'react-dom';

const App = () => {

  const Stack = createNativeStackNavigator();

  return (
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
        <Stack.Screen name="VisualizeDiagnosis" component={VisualizeDiagnosis} />
        <Stack.Screen name="StatusUpdates" component={StatusUpdates} />
        <Stack.Screen name="ShopScreen" component={ShopScreen} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;