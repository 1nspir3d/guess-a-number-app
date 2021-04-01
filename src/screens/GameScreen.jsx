import React, { useEffect } from 'react';
import {
 View, Text, StyleSheet, Button, Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  setRandomNumber,
  setLowerThan,
  setHigherThan,
  win,
  startGame,
  toggleConfirm,
  incrementRounds,
  resetRounds,
} from '../redux/actions';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';
import GameOverScreen from './GameOverScreen';
// import Colors from '../constans/colors';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
    top: '15%',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignContent: 'space-around',
    justifyContent: 'space-evenly',
    width: 200,
    height: 50,
    flexWrap: 'wrap',
  },
  gameField: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: '40%',
  },
});
export default function GameScreen() {
  const dispatch = useDispatch();
  const betweenNumbers = useSelector((state) => state.generatedNumbersReducer);
  const randomNumber = useSelector((state) => state.randomNumberReducer);
  const isStarted = useSelector((state) => state.startGameReducer);
  const isWin = useSelector((state) => state.winReducer);
  const selectedNumber = useSelector((state) => state.selectedNumberReducer);

  function generateNumber() {
    const random = Math.floor(Math.random() * 100);

    if (
      random >= betweenNumbers.lower
      || random < betweenNumbers.higher
      || random === randomNumber
    ) {
      generateNumber(betweenNumbers);
    } else {
      dispatch(setRandomNumber(random));
    }
  }

  function isHigher() {
    if (selectedNumber <= randomNumber) {
      Alert.alert("Don't lie!", "You know that your number isn't greater.");
      return;
    }
    dispatch(setHigherThan(randomNumber));
    dispatch(incrementRounds());
  }

  function isLower() {
    if (selectedNumber >= randomNumber) {
      Alert.alert("Don't lie!", "You know that your number isn't lower.");
      return;
    }
    dispatch(setLowerThan(randomNumber));
    dispatch(incrementRounds());
  }

  function restartGame() {
    if (isWin) { dispatch(win()); }
    dispatch(startGame());
    dispatch(toggleConfirm());
    dispatch(setLowerThan(100));
    dispatch(setHigherThan(-0));
    dispatch(resetRounds());
  }

  function confirmNumberHandler() {
    // IN CASE I WANTED TO MAKE A DIFFERENT GAME LOGIC I WILL USE THE CODE BELOW
    // if (selectedNumber !== randomNumber) {
    //   console.log(typeof selectedNumber, typeof randomNumber);
    //   Alert.alert('You\'re lying!', 'This is not you\'re number', [
    //     {
    //       text: 'Restart game!',
    //       style: 'destructive',
    //       onPress: restartGame,
    //     },
    //     {
    //       text: 'Continue',
    //       style: 'cancel',
    //       onPress: () => {},
    //     },
    //   ]);
    //   return;
    // }
    dispatch(win());
  }

  useEffect(() => {
    generateNumber();
  }, [betweenNumbers]);

  useEffect(() => {
    if (parseInt(selectedNumber, 10) === randomNumber) {
      confirmNumberHandler();
    }
  }, [randomNumber]);

  return (
    <View
      style={{ ...styles.screen, display: `${!isStarted ? 'none' : 'flex'}` }}
    >
      {!isWin ? (
        <Card style={styles.gameField}>
          <Text style={{ fontSize: 25 }}>Your number is:</Text>
          <NumberContainer number={randomNumber} />
          <View style={styles.buttonContainer}>
            {/* <View>
              <Button
                title="This is my number!"
                onPress={confirmNumberHandler}
                color={Colors.primary}
              />
            </View> */}
            <View>
              <Button title="Lower" onPress={isLower} color="red" />
            </View>
            <View>
              <Button title="Greater" onPress={isHigher} color="green" />
            </View>
          </View>
        </Card>
      ) : (
        <GameOverScreen newGame={restartGame} number={selectedNumber} />
      )}
    </View>
  );
}
