import React, { useState } from 'react';
import { render } from 'react-dom';
import { Image, StyleSheet, Text, View, FlatList, Button } from 'react-native';
import Video from 'react-native-video';

const VisualizeDiagnosis = ({ navigation, route }) => {
    return (
        <View>
            <Image source={require('./inhale.gif')} style={styles.visualization}/>
        </View>
    );

}
const styles = StyleSheet.create({
    visualization: {
        width: 300,
        height: 300,
        marginTop: 20,
        alignContent: 'center',
    },
})

export default VisualizeDiagnosis;
