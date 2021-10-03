import React, { useState } from 'react';
import { Image, StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { Icon } from "react-native-elements"


const StatusUpdates = () => {
    {/* TODO:
        1) Get rid of the vomit-inducing color palette. Maybe make this page darker-themed? 
        2) Get rid of janky white cutoff around detective person
        3) Make it fill the whole screen
        4) Change detective guy
    */}
    return (
        <View>
            <View style={styles.paper}/>
            <Text style={styles.paperTitle}>Top Secret</Text>
            <Text style={styles.info}>Your last checkup was great. Remember that Flu season is coming up, so get your vaccine asap!</Text>
            <Image source={require("../transparentDetective.png")} style={styles.detective}></Image>
        </View>
    );
}
const styles = StyleSheet.create({
    paper:{
        height: 500,
        width: 350,
        backgroundColor: "#ecdc64",
        transform:[ {rotate: '20deg'}],
    },
    detective: {
        position: 'absolute',
        top: 200,
        left: 100,
        height: 400,
        width: 300,
    },
    paperTitle:{
        transform:[ {rotate: '20deg'}],
        fontSize: 35,
        fontWeight: 'bold',
        color: "#FF0000",
        position: 'absolute',
        left: 180,
        top: 40,
        width: 200,
    },
    info: {
        transform:[{rotate: '20deg'}],
        fontSize: 15,
        position: 'absolute',
        left: 100,
        top: 70,
        width: 200,
    },
});
export default StatusUpdates;