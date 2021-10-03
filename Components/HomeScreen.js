import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { Icon } from "react-native-elements"
import styled from "styled-components";
import TodoList from './TodoList';
import { IconButton, Colors } from 'react-native-paper';

// // import { FontAwesomeIcon } from '@fortawesome/fontawesome-svg-core'
// // import { FontAwesomeIcon } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

const HomeScreen = ({navigation, route}) => {
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
      }
    ]);
    
    const ComponentContainer = styled.View`
      height: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    `;
    let taskStatuses = [];
    return (
        <View style={styles.container}>
        <View style={styles.profile} />
        <Text style={styles.name}>Ben Dover</Text>
        <Text style={styles.level}>Level: 6969</Text>
        {/* <Text style={styles.credits}>Credits: 1000</Text>*/} 
        <Text style={styles.quests}>Quest</Text>
        <Text style={styles.missionText}>Your Mission</Text>

        <IconButton icon="store" color={Colors.black} size={50} onPress = {() => navigation.navigate("ShopScreen")}/>

         <ComponentContainer style = {{position: 'relative', top:300}}>
        {/* <View>
          <StatusBar barStyle="light-content" 
             backgroundColor="midnightblue" />
        </View> */}

        <View>
          <FlatList
            data={data}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <TodoList navigation={navigation} item={item} />
            )}
          />

        </View>
      </ComponentContainer>
      {/* <Button title="Shop" style={{width: "auto", color: "#f0f"}}/>
      <View style={{ position: 'relative', top: 140, width: 200, height: 40, backgroundColor: 'red' }}>
        <Entypo name="shop" size={20} color="midnightblue" />
      </View> */}
      {/* <Entypo name="circle" size={20} color="midnightblue" /> */}
        {/* <View style={styles.progressBar} />
        <View style={styles.progressBarBG} />  */}
        
        {/* <FontAwesomeIcon icon={faCoffee} />
        <FontAwesomeIcon icon={faCoffee} onPress={() => navigation.navigate("Shop")}/> */}
        <View style={styles.selectBoxes}>
          <View style={{ textAlignVertical: 'center', width: 200, height: 40, backgroundColor: 'red' }}>
            <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>Mission Brief</Text>
          </View>
          <View style={{ position: 'relative', top: 20, width: 200, height: 40, backgroundColor: 'red' }}>
            <Text style={{ textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>Status Update</Text>
          </View>
        </View>
        
        {/* <Image
          style={styles.stretch}
          source={{
            uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
          }}
        /> */}
        {/* <Button
          title="Press me"
          onPress={() => Alert.alert('Simple Button pressed')}
        /> */}
      </View>
    );
}
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  name: {
    position: 'absolute',
    width: 139,
    height: 35,
    left: 201,
    top: 33,

    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 30,
    lineHeight: 35,

    color: '#000000',
  },
  level: {
    position: 'absolute',
    height: 23,
    left: 201,
    top: 76,

    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 20,
    lineHeight: 23,

    color: '#000000',
  },
  quests: {
    position: 'absolute',
    // width: 76,
    height: 28,
    left: 24,
    top: 320,

    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 24,
    // lineHeight: 28,

    color: '#000000',
  },
  todo: {
    position: 'absolute',
    width: 335,
    height: 53,
    left: 8,
    top: 365,
  },
  progressBar: {
    position: 'absolute',
    width: 228.09,
    height: 25,
    left: 6,
    top: 589,

    backgroundColor: '#55BCF6',
    // boxShadow: 0, 4, 30, rgba(0, 0, 0, 0.15),
    borderRadius: 60,
  },
  progressBarBG: {
    position: 'absolute',
    width: 335.97,
    height: 25,
    left: 7.03,
    top: 589,

    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    // box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.15),
    borderRadius: 60,
  },
  profile: {
    position: 'absolute',
    width: 179,
    height: 253,
    left: 9,
    top: 38,

    //backgroundImage: 'url(cave.jpg)',
    borderRadius: 25,
  },
  stretch: {
    width: 50,
    height: 200,
    resizeMode: 'stretch',
  },
  missionText: {
    position: 'absolute',
    fontSize: 20,
    top: 136,
    left: 245,
  },
  selectBoxes: {
    position: 'absolute',
    height: 281,
    top: 176,
    left: 205,
  }
});
export default HomeScreen;