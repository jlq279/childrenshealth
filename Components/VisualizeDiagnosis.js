import React, { useState } from 'react';
import { render } from 'react-dom';
import { Image, StyleSheet, Text, View, FlatList, Button } from 'react-native';

const VisualizeDiagnosis = ({ navigation, route }) => {
    return (
        <View>
            <Text style={styles.titleText}>
                <Text style={{fontWeight: 'bold'}}>Mission: </Text>
                <Text >Asthma</Text>
            </Text>
            <Image source={{uri: "https://media.giphy.com/media/BEsdt1toJOVWeolUbM/giphy.gif"}} style={styles.visualization}/>
            <View style={styles.textBox}>
                <Image source={{uri: "https://media.giphy.com/media/BEsdt1toJOVWeolUbM/giphy.gif"}} style={styles.detective}></Image>
                <Text style={styles.dialogue}>Alright solider, our enemies have decided to attack the lungs through something</Text>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    titleText: {
        fontSize: 30,
        fontFamily: 'Roboto',
        textAlign: 'center',
    },
    visualization: {
        width: 400,
        height: 400,
        marginTop: 20,
        marginLeft: 10,
        alignContent: 'center',
    },
    textBox: {
        flexDirection: 'row',
        borderRadius: 25,
        height: 300,
        backgroundColor: "#909090"
    },
    detective: {
        marginTop: 20,
        height: 250,
        width: 200,
    },
    dialogue: {
        flex: 1,
        flexWrap: 'wrap',
        fontWeight: 'bold',
        fontSize: 20,
    }
})

export default VisualizeDiagnosis;