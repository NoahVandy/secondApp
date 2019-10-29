import React from 'react';
import { Text, StyleSheet, Button, View } from 'react-native';
import Colors from '../constants/Colors';


const Number = (props) => {
    return (
        <View style={styles.chosenContainer}>
           
            <View style={styles.numberContainer}>
                <Text style={styles.number}>{props.children}</Text>

            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    chosenContainer: {
        margin: 10,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    numberContainer: {
        borderColor: Colors.secondary,
        borderWidth: 2,
        borderRadius: 10,
        margin: 10,
        padding: 20,
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',

    },
    number: {
        fontSize: 32,
        color: Colors.primary
    }, 
});

export default Number;