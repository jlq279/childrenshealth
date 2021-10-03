import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import HomeScreen from './HomeScreen';
import App from '../App';
import { Icon } from "react-native-elements"
import styled from "styled-components";
import TodoList from './TodoList';
import { IconButton, Colors } from 'react-native-paper';

// // import { FontAwesomeIcon } from '@fortawesome/fontawesome-svg-core'
// // import { FontAwesomeIcon } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';



const FirstScreen = ({navigation}) => {

    let taskNumber = 0;
    return (
        
        <Button
          title="Press me"
          onPress={() =>{navigation.navigate("HomeScreen", {taskNumber: 0});
            } 
        }
        /> 
    );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  }
});
export default FirstScreen;