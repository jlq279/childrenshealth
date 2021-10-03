import React, { useState } from "react";
import { StyleSheet, View, CheckBox, Button } from "react-native";
import styled from "styled-components";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function TodoList({ navigation, item }) {
    const [isSelected, setSelection] = useState(false);
    return (
        <View style={{marginBottom: 10}}>
            <TouchableOpacity style={{backgroundColor:'#55BCF6', height: 40, borderRadius: 10}} onPress = {() => {
              navigation.navigate("CameraScreen", {taskNumber: item.key})
              }}>
                <ListContainer>
                    <CheckBox 
                        value={isSelected}
                        enabled={false}
                        // onValueChange={setSelection}
                        style={styles.checkbox}
                    />
                    <View>
                        <TextItem style={{color: 'white', borderRadius: 10}}>{item.value}</TextItem>
                    </View>
                </ListContainer>
            </TouchableOpacity>
        </View>
    );
}

const ListContainer = styled.TouchableOpacity`
  background-color: #55BCF6;
  height: auto;
  width: 350px;
  border-radius: 10px;
  flex-direction: row;
`;

// const ComponentContainer = styled.View`
//   flex-direction: row;
//   justify-content: center;
//   height: auto;
//   width: auto;
// `;

const TextItem = styled.Text`
  color: black;
  width: 260px;
  height: auto;
  font-size: 20px;
  padding: 5px;
  `;

const styles = StyleSheet.create({
    checkbox: {
      alignSelf: "center",
    },
    label: {
      margin: 8,
    },
  });