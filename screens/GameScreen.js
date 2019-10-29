import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';  
import Number from '../components/Number';
import Card from '../components/Card';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    }
    return rndNum;
}


const GameScreen = (props) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(0,100, props.userChoice )); 
    const [nextMin, setNextMin] = useState(0);
    const [nextMax, setNextMax] = useState(100);
    const [numberOfGuesses, setNumberOfGuesses] = useState(0);

    useEffect(() => {
        if (currentGuess == props.userChoice) { 
            props.endGame(numberOfGuesses); 
        }
    }, [currentGuess, props.userChoice]);


   const nextGuessHandler = (direction) => {

        if ((direction === 'lower' && currentGuess < props.userChoice) ||  (direction === 'higher' && currentGuess > props.userChoice) ){
            Alert.alert("Don't lie to me");
            return;
        } 
       
    setNumberOfGuesses( (numberOfGuesses) => numberOfGuesses + 1);
        let nextGuess = 0;
        
        if (direction === 'lower') {
            nextGuess = generateRandomBetween(nextMin, currentGuess, currentGuess);
            setNextMax(currentGuess);
        }
        if (direction === 'higher') {
            nextGuess = generateRandomBetween(currentGuess, nextMax, currentGuess);
            setNextMin(currentGuess);
        }
         
        setCurrentGuess(nextGuess);
   }

    return (
        <View style={styles.screen}>
            <Card style={styles.screen} >
            <Text>Opponent's guess</Text>
            <Number>Computer Guess {currentGuess}</Number>
           <Text>User choice: {props.userChoice} NextMin: {nextMin} NextMax: {nextMax} Guesses: {numberOfGuesses} </Text>
            <View style={styles.buttonContainer}>
                <Button title="Lower" onPress = {() =>{
                    nextGuessHandler("lower");
                    
                } }/>
                <Button title="Higher" onPress = {() => {
                 nextGuessHandler("higher");
                }} />
            </View>
            </Card>
        </View>        
    )
}

const styles = StyleSheet.create({
    screen: { 
        padding: 10,
        alignItems:'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'

    }
});

export default GameScreen;