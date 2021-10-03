import React, { useState , Component} from 'react';
import { Image, StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { ProgressBar } from 'react-native-paper';

const DATA = [
    {
        id: Math.random().toString(),
        price: 400,
        description: "Cool hat",
        file: {uri: "https://i.ibb.co/BjZHcPS/hat.png"}
    },
    {
        id: Math.random().toString(),
        price: 200,
        description: "Cool shirt",
        file: {uri: "https://i.ibb.co/BjZHcPS/hat.png"}
    },
    {
        id: Math.random().toString(),
        price: 100,
        description: "Cool pants",
        file: {uri: "https://i.ibb.co/BjZHcPS/hat.png"}
    },
    {
        id: Math.random().toString(),
        price: 90,
        description: "Cool scarf",
        file: {uri: "https://i.ibb.co/BjZHcPS/hat.png"}
    },
    {
        id: Math.random().toString(),
        price: 150,
        description: "Cool glasses",
        file: {uri: "https://i.ibb.co/BjZHcPS/hat.png"}
    },
    {
        id: Math.random().toString(),
        price: 700,
        description: "Cool shoes",
        file: {uri: "https://i.ibb.co/BjZHcPS/hat.png"}
    },
];



const ShopScreen = ({ naviagation, route }) => {
    console.log("from shop screen", global.numBalloons);

    const [bal, setBal] = React.useState(global.numBalloons)

    class Purchasable extends Component {

        render() {
            const price = this.props.price;
            const description = this.props.description;
            const file = this.props.file;

            return (
                <View style={this.styles.bigRow}>
                    <View style={this.styles.item}>
                        <Text style={this.styles.descriptionStyle}>{description}</Text>
                        <Button onPress={() => {if(global.numBalloons >= price){global.numBalloons -= price; setBal(global.numBalloons)}}} title={"Purchase for " + price} style={this.styles.priceStyle} />
                    </View>
                    <Image source={file} style={this.styles.displayImage}/>
                </View>
    
            );
        }
    
        styles = StyleSheet.create({
            bigRow:{
                flexDirection: 'row',
            },
            item: {
                flex: 3,
                marginLeft: 20,
                marginTop: 20,
            },
            displayImage: {
                paddingLeft: 20,
                paddingRight: 20,
                flex: 1,
                height: 150,
                width: 150,
            },
            descriptionStyle: {
                paddingBottom: 10,
                fontSize: 24,
                fontWeight: 'bold',
            },
            priceStyle: {
                width: 200,
                marginRight: 20
            },
        });
    }

    const renderItem = ({item}) => (
        <Purchasable price={item.price} description={item.description} file={item.file}/>
    )
    
    
    return (
        <View>
            <Text>Current balloons: {bal}</Text>
            <FlatList
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </View>
    );


    
}

export default ShopScreen;