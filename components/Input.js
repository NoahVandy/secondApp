import React from 'react';
import {TextInput, StyleSheet, View} from 'react-native';

const Input = props => {
    return (
        <View style={styles.textInputContainer} >
            <TextInput {...props} style = {{...styles.input, ...props.style}} />
        </View>
    )

};

const styles = StyleSheet.create({
    input: {
        
        paddingLeft: 5 
    },
    textInputContainer: {
        borderColor: '#bbb',
        borderRadius: 5,
        borderWidth: 0.5, 
        margin: 10,
        padding: 5 , 
    }, 
});

export default Input;