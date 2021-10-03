import React, { useState } from "react";
import { StyleSheet, View, CheckBox } from "react-native";
import styled from "styled-components";
import { Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function TodoList({ navigation, item }) {
    console.log("item :", item);
    const [isSelected, setSelection] = useState(item.verify);
    return (
        <ComponentContainer>
            <TouchableOpacity onPress = {() => {
              navigation.navigate("CameraScreen", {taskNumber: item.key, value: item.value})
              }}>
                <ListContainer>
                    <CheckBox 
                        value={isSelected}
                        enabled={false}
                        // onValueChange={setSelection}
                        style={styles.checkbox}
                    />
                    <View>
                        <TextItem>{item.value}</TextItem>
                    </View>
                </ListContainer>
            </TouchableOpacity>
        </ComponentContainer>
    );
}

const ListContainer = styled.TouchableOpacity`
  background-color: whitesmoke;
  height: auto;
  width: 350px;
  margin-bottom: 30px;
  border-radius: 10px;
  flex-direction: row;
`;

const ComponentContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  height: auto;
  width: auto;
`;

const TextItem = styled.Text`
  color: black;
  width: 260px;
  height: auto;
  font-size: 20px;
  padding: 5px;
  `;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    checkboxContainer: {
      flexDirection: "row",
      marginBottom: 20,
    },
    checkbox: {
      alignSelf: "center",
    },
    label: {
      margin: 8,
    },
  });