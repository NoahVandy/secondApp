import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native' ;
import Colors from '../constants/Colors';

const Header = (props) => { 
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{props.title}</Text>
        </View>
    )
}


const styles = StyleSheet.create ({
 header: {
     width: '100%',
     height:90,
     paddingTop: 36,
     backgroundColor: Colors.header,
     alignContent: 'center',
     justifyContent: 'center',
     paddingLeft: 5
 },
 headerText: {
     fontSize: 24,
     color: 'black',
 }
});

export default Header;