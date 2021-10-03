import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, SafeAreaView, ScrollView } from 'react-native';
import styled from "styled-components";
import TodoList from './TodoList';
import { IconButton, ProgressBar, Colors } from 'react-native-paper';
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import '../global';

const HomeScreen = ({ navigation, route }) => {
  const todoItems = ["Quest 1", "Quest 2"];
  const [test, testState] = useState(0);

  const [data, setData] = useState([
    {
      value: "Take Inhaler",
      key: Math.random().toString(),
    },
    {
      value: "Exercise",
      key: Math.random().toString(),
    },
    {
      value: "Get Flu Shot",
      key: Math.random().toString(),
    },
    {
      value: "Get Flu Shot",
      key: Math.random().toString(),
    },
    {
      value: "Get Flu Shot",
      key: Math.random().toString(),
    },
    {
      value: "Get Flu Shot",
      key: Math.random().toString(),
    },
    {
      value: "Get Flu Shot",
      key: Math.random().toString(),
    },
    {
      value: "Get Flu Shot",
      key: Math.random().toString(),
    },
    {
      value: "Get Flu Shot",
      key: Math.random().toString(),
    },
    {
      value: "Get Flu Shot",
      key: Math.random().toString(),
    }
  ]);

  const ComponentContainer = styled.View`
      height: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `;
  return (

    <View style={{ flexDirection: "column", justifyContent: 'center' }}>

      <View style={{ flexDirection: "row", top: '3%', margin: 25, marginBottom: 25, height: '5%', justifyContent: 'center' }}>
        <Image source={require('../logo.png')} resizeMode='contain' style={{ height: 100, width: '100%' }} />
      </View>
      <View style={{ flexDirection: "row", margin: 5, height: '2%', justifyContent: 'center' }}>
        <View style={{ flexDirection: "column", width: '75%', height: '100%' }}>
          <View style={{ flexDirection: "row" }}>
            {/* <Text>{global.numBalloons}/1000 balloons</Text> */}
            {/* <TouchableOpacity
              style={styles.buttonStyle}
              activeOpacity={0.5}>
              <Image
                source={require('../balloon.png')}
                style={styles.buttonImageIconStyle}
              />
            </TouchableOpacity> */}
          </View>
          {/* <ProgressBar progress={global.numBalloons/1000.0} color={'#55BCF6'} style={{ height: '100%', borderRadius: 50 }} /> */}
        </View>
        <View style={{ flexDirection: "row", height: '100%', alignItems: 'center', marginTop: 12 }}>
          {/* <IconButton icon="store" color={Colors.black} size={50} onPress={() => navigation.navigate("ShopScreen")} /> */}
        </View>
      </View>

      <View style={{ flexDirection: "row", alignItems: "flex-start", justifyContent: 'center', height: '25%' }}>
        <View style={{ flexDirection: "column", alignSelf: 'flex-start', alignItems: "flex-start", width: '45%', height: '100%', marginLeft: 10, marginTop: 10, marginRight: 5 }}>
          <View style={{ height: '100%', width: '100%' }}>
            <ImageBackground source={require('../jakefromstatefarm.jpeg')} style={{ height: "100%", width: '100%', justifyContent: "center" }} />
          </View>
        </View>

        <View style={{ flexDirection: "column", alignSelf: 'flex-start', alignItems: "flex-start", width: '45%', marginLeft: 5, marginTop: 10, marginRight: 10 }}>
          <View style={{ flexDirection: "row", alignItems: "flex-start", margin: 10 }}>
            <Text style={styles.name}>Mike Dixie</Text>
          </View>
          <View style={{ flexDirection: "row", marginLeft: 10 }}>
            <Text style={styles.level}>Level: 6969</Text>
          </View>
          <View style={{ flexDirection: "row", margin: 5 }}>
            <TouchableOpacity style={{ backgroundColor: '#F65555', padding: 7, width: 150, borderRadius: 10 }} onPress={() => navigation.navigate("VisualizeDiagnosis")}>
              <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>Mission Brief</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", margin: 5 }}>
            <TouchableOpacity style={{ backgroundColor: '#F65555', padding: 7, width: 150, borderRadius: 10 }} onPress={() => navigation.navigate("StatusUpdates")}>
              <Text style={{ fontSize: 20, color: 'white', textAlign: 'center' }}>Status Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ flexDirection: "row", alignSelf: 'center', marginTop: 10 }}>
        <View style={{ flexDirection: "column" }}>
          <View style={{ flexDirection: "row", margin: 15, height: '2%', justifyContent: 'center' }}>
            <View style={{ flexDirection: "column", width: '75%', height: '100%' }}>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'bold', fontSize: 24, marginBottom: 15 }}>Quests</Text>
              </View>
            </View>
            <View style={{ flexDirection: "row", height: '100%', alignItems: 'center', marginTop: 12 }}>
              <IconButton icon="store" color={Colors.black} size={50} onPress={() => navigation.navigate("ShopScreen")} />
            </View>
          </View>
          <View style={{ alignItems: 'center' }}>

            <ScrollView style={styles.scrollView}>
              {
                data.map((item) => (
                  <View key={item.key}>
                    <TodoList navigation={navigation} item={item} />
                  </View>
                ))
              }
            </ScrollView>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  scrollView: {
    height: '70%',
    width: '100%',
    marginTop: 10,
    padding: 20,
    borderRadius: 5,
  },
  name: {
    width: 139,
    height: 35,
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 35,

    color: '#000000',
  },
  level: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 16,

    color: '#000000',
  },
  quests: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 24,

    color: '#000000',
  },
  todo: {
    width: 335,
    height: 53,
  },
  buttonImageIconStyle: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    borderRadius: 50,
    backgroundColor: 'grey'
  },
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    top: -10,
    borderRadius: 50,
  },
  contentContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    paddingBottom: 50
  }
});
export default HomeScreen;