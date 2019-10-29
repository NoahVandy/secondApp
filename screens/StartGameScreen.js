import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Button,
    TouchableWithoutFeedback,
    Keyboard,
    Alert
} from 'react-native'
import Card from '../components/Card';
import Colors from '../constants/Colors';
import Input from '../components/Input';
import Number from '../components/Number';

const StartGameScreen = (props) => {


    const [enteredValue, setEnteredValue] = useState('');
    const [confirm, setConfirm] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState(0);
    const [confirmedOutput, setConfirmedOutput] = useState(<Text></Text>);

    // handlers for buttons

    const numberInputHandler = (inputText) => {
        // remove any non integer characters
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    const handleResetPress = () => {
        setEnteredValue('');
        setConfirm(false);
    }

    const handleConfirmPress = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber))
            Alert.alert("Error", "Not a valid input",
                [{ text: 'Okay', style: 'destructive', onPress: handleResetPress }]);
        setConfirmedOutput(
            <Card style={styles.inputContainer}>
                 <Text>You choose: </Text>
                <Number>{chosenNumber}</Number>
                <View style={styles.button} >
                    <Button title="start game" onPress = { () => {
                        props.onStartGame(chosenNumber)
                    }}/>
                </View>
            </Card>
        );
        setConfirm(true);
        setEnteredValue('');
        setSelectedNumber(chosenNumber);
        Keyboard.dismiss();


    }


    // start main code for the app screen
    return (

        <View style={styles.screen}>
            <Text >Start a new game</Text>

            <Card style={styles.inputContainer} >
                <Input style={styles.input}
                    blurOnSubmit
                    autoCapitalize='none'
                    autoCorrect={false}
                    keyboardType='number-pad'
                    maxLength={2}
                    onChangeText={numberInputHandler}
                    value={enteredValue}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button color={Colors.primary}
                            style={styles.buttonReset}
                            title='Reset'
                            onPress={handleResetPress}
                        >

                        </Button>
                    </View>
                    <View style={styles.button}>
                        <Button
                            color={Colors.secondary}
                            style={styles.buttonConfirm}
                            title='Confirm'
                            onPress={handleConfirmPress}
                        ></Button>
                    </View>
                </View>
            </Card>
            {confirmedOutput}
        </View>

    )
}

const styles = StyleSheet.create({
    screen: {
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputContainer: {
        width: 300,
        maxWidth: "80%",
        marginBottom: 10

    },
    buttonContainer: {
        alignContent: 'space-between',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    input: {
        width: '80%',
        textAlign: 'center'
    },
    buttonRest: {
        backgroundColor: '#ff7675',
    },
    buttonConfirm: {
        backgroundColor: '#00b894',
    },
    button: {
        width: 90,
    }
});


export default StartGameScreen;