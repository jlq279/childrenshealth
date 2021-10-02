import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, SafeAreaView, Text, View, Image, Button, Alert, FlatList } from 'react-native';

export default function App() {
  todoItems = ["Quest 1", "Quest 2"];
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Ben Dover</Text>
      <Text style={styles.level}>Level: 69</Text>
      <StatusBar style="auto" />
      <SafeAreaView style={{padding: 16}}>
          <Text style={styles.quests}>Quests</Text>
          <FlatList>
              data={todoItems}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => {
                  return (
                      <View style={styles.todo}>
                          <Text>{item}</Text>
                      </View>
                  )
              }}
          </FlatList>
      </SafeAreaView>
      {/* <Image
        style={styles.stretch}
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
      />
      <Button
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
    width: 79,
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
    width: 76,
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
    // position: 'absolute',
    width: 335,
    height: 53,
    // left: 8,
    // top: 365,
  },
  stretch: {
    width: 50,
    height: 200,
    resizeMode: 'stretch',
  },
});
