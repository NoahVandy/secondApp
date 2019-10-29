import React, {useState} from 'react';
import { StyleSheet,  View, Alert } from 'react-native';
import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';


export default function App() {

  const [userNumber, setUserNumber] = useState();
  const startGameHandler = (selectedNumber) => {
      setUserNumber(selectedNumber);
      setNumberOfGuesses(0);
  }

  const [numberOfGuesses, setNumberOfGuesses] = useState(0);

  const endGameHandler = (x) => {
    Alert.alert("I guessed the number in only " + x + " attempts!");
    setNumberOfGuesses(x);
  }

  let content = <StartGameScreen onStartGame={startGameHandler} />;

  if (userNumber && numberOfGuesses == 0 ) {
    content = <GameScreen userChoice = {userNumber} endGame = {endGameHandler} />
  }
  else if (numberOfGuesses > 0) {
    content = <StartGameScreen onStartGame={startGameHandler} />;
  }


  return (
    <View style={styles.container} >
       <Header title={"Guess a number"}></Header>

       {content}

    </View>
  );
}

const styles = StyleSheet.create({
container: {
  flex: 1
}
});
