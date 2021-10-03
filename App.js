import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './Components/HomeScreen';
import CameraScreen from './Components/CameraScreen';
import ShopScreen from './Components/ShopScreen';

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
        <Stack.Screen name="ShopScreen" component={ShopScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;