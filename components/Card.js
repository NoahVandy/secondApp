import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {

    return (
        <View style={{ ...styles.card, ...props.style }}>{props.children}</View>
    )
}

const styles = StyleSheet.create({

    card: { 
        backgroundColor: 'white',
        alignContent: 'space-between',
        justifyContent: 'center',
        padding: 20,
        borderRadius: 10, 
        elevation:5
    },
   
});


export default Card;