import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import HomeScreen from './HomeScreen';
import CameraScreen from './CameraScreen';
import VisualizeDiagnosis from './VisualizeDiagnosis';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';

const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
        />
        <Stack.Screen name="CameraScreen" component={CameraScreen} />
        <Stack.Screen name="VisualizeDiagnosis" component={VisualizeDiagnosis} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;