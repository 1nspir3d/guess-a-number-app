import React, { useEffect } from 'react';
import {
    View, Text, StyleSheet, Button,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  setRandomNumber,
  setLowerThan,
  setHigherThan,
  win,
  startGame,
  toggleConfirm,
} from '../redux/actions';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';
import Colors from '../constans/colors';

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
    height: 100,
    flexWrap: 'wrap',
  },
  gameField: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '80%',
    height: '50%',
  },
  winWindow: {
    width: 200,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function GameScreen() {
  const dispatch = useDispatch();
  const betweenNumbers = useSelector((state) => state.generatedNumbersReducer);
  const randomNumber = useSelector((state) => state.randomNumberReducer);
  const isStarted = useSelector((state) => state.startGameReducer);
  const isWin = useSelector((state) => state.winReducer);

  function generateNumber() {
    const random = Math.floor(Math.random() * 100);

    if (random >= betweenNumbers.lower || random < betweenNumbers.higher) {
      generateNumber(betweenNumbers);
    } else {
      dispatch(setRandomNumber(random));
    }
  }

  function isHigher() {
      dispatch(setHigherThan(randomNumber));
  }

  function isLower() {
      dispatch(setLowerThan(randomNumber));
  }

  function restartGame() {
    dispatch(win());
    dispatch(startGame());
    dispatch(toggleConfirm());
    dispatch(setLowerThan(100));
    dispatch(setHigherThan(-0));
  }

  useEffect(() => {
      generateNumber();
  }, [betweenNumbers]);

  return (
    <View
      style={{ ...styles.screen, display: `${!isStarted ? 'none' : 'flex'}` }}
    >
      {!isWin ? (
        <Card style={styles.gameField}>
          <Text style={{ fontSize: 25 }}>Your number is:</Text>
          <NumberContainer number={randomNumber} />
          <View style={styles.buttonContainer}>
            <View>
              <Button
                title="This is my number!"
                onPress={() => {
                  dispatch(win());
                }}
                color={Colors.primary}
              />
            </View>
            <View>
              <Button
                title="Lower"
                onPress={isLower}
                color="red"
              />
            </View>
            <View>
              <Button
                title="Higher"
                onPress={isHigher}
                color="green"
              />
            </View>
          </View>
        </Card>
      ) : (
        <Card style={styles.winWindow}>
          <View style={{ alignItems: 'center' }}>
            <Text>Computer won</Text>
            <Button
              title="Restart"
              color={Colors.primary}
              onPress={restartGame}
            />
          </View>
        </Card>
      )}
    </View>
  );
}
