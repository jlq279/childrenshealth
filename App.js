import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';



// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
  appId: "1:945921462289:web:a538cc3e649427a6ac21b0",
  measurementId: "G-4VDY1NJ5B5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
/*
import { getDatabase, ref, onValue } from 'firebase/database';

function storeHighScore(userId, score) {
  const db = getDatabase();
  const reference = ref(db, 'users/' + userId);
  set(ref(db, 'users/' + userId), {
    highscore: score,
  });
}
*/
export default function App() {
  const todoItems = ["Quest 1", "Quest 2"];
  const[test, testState] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.profile}/>
      <Text style={styles.name}>Ben Dover</Text>
      <Text style={styles.level}>Level: {test}</Text>
      <Text style={styles.quests}>Quest</Text>
      <Text style={styles.missionText}>Your Mission</Text>
      <FlatList
          style={{height: 500, width: 200, top: 365}}
          data={todoItems}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
              return (
                  <View style={{width: 100, height: 100}}>
                       <Text>{item}</Text>
                  </View>
              )
          }}/>
      <View style={styles.progressBar}/>
      <View style={styles.progressBarBG}/>
      <View style={styles.selectBoxes}>
        <View style = {{textAlignVertical: 'center', width: 200, height: 40, backgroundColor: 'red'}}>
          <Text style = {{textAlign: 'center', fontSize: 16, fontWeight: 'bold'}}>Mission Brief</Text>
          </View>
        <View style = {{position: 'relative', top: 20, width: 200, height: 40, backgroundColor: 'red'}}>
        <Text style = {{textAlign: 'center', fontSize: 16, fontWeight: 'bold'}}>Status Update</Text>
          </View>
        <View style = {{position: 'relative', top: 40, width: 200, height: 40, backgroundColor: 'red'}}>
        <Text style = {{textAlign: 'center', fontSize: 16, fontWeight: 'bold'}}>The Shop</Text>
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
    lineHeight: 28,

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
