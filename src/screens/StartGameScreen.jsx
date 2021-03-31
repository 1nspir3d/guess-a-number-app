import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import {
  setInput,
  setSelectedNumber,
  toggleConfirm,
  setRandomNumber,
  startGame,
} from '../redux/actions';
import Card from '../components/Card';
import Colors from '../constans/colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  screenTitle: {
    fontSize: 20,
  },
  inputContainer: {
    maxWidth: 300,
    width: '80%',
    borderLeftColor: 'black',
    alignItems: 'center',
    paddingTop: 20,
    borderTopStartRadius: 30,
    borderBottomEndRadius: 30,
    marginTop: 15,
  },
  input: {
    textAlign: 'center',
    width: 150,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  button: {
    width: 100,
  },
  numberCard: {
    marginTop: 20,
    alignItems: 'center',
  },
});

export default function StartGameScreen() {
  const input = useSelector((state) => state.inputReducer);
  const isConfirmed = useSelector((state) => state.confirmReducer);
  const betweenNumbers = useSelector((state) => state.generatedNumbersReducer);
  const isStarted = useSelector((state) => state.startGameReducer);
  const selectedNumber = useSelector((state) => state.selectedNumberReducer);
  const dispatch = useDispatch();

  const handleTextChange = (text) => {
    dispatch(setInput(text.replace(/[^0-9]/g, '')));
  };

  const resetInputText = () => {
    dispatch(setInput(''));
    dispatch(toggleConfirm());
  };

  const confirmInputHandler = () => {
    if (
      parseInt(input, 10).isNaN
      || input <= 0
      || input > 99
    ) {
      Alert.alert('Invalid number!', 'Only numbers between 1 and 99 allowed!', [
        {
          text: 'Okay',
          style: 'destructive',
          onPress: () => dispatch(setInput('')),
        },
      ]);
      return;
    }
    if (!isConfirmed) {
      dispatch(toggleConfirm());
    }
    dispatch(setSelectedNumber(input));
    dispatch(setInput(''));
    Keyboard.dismiss();
  };

  function generateNumber() {
    const random = Math.floor(Math.random() * 100);

    if (random >= betweenNumbers.lower || random < betweenNumbers.higher) {
      generateNumber(betweenNumbers);
    } else {
      dispatch(setRandomNumber(random));
    }
  }
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={{ ...styles.screen, display: `${isStarted ? 'none' : 'flex'}` }}>
        <Text style={styles.screenTitle}>Start a New game!</Text>
        <Card style={styles.inputContainer}>
          <Text>Select a number!</Text>
          <Input
            style={styles.input}
            keyboardType="number-pad"
            maxLength={2}
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={handleTextChange}
            onSubmitEditing={resetInputText}
            value={input}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button
                title="Reset"
                color={Colors.accent}
                onPress={resetInputText}
              />
            </View>
            <View style={styles.button}>
              <Button
                title="Confirm"
                color={Colors.primary}
                onPress={confirmInputHandler}
              />
            </View>
          </View>
        </Card>
        {isConfirmed && (
          <Card style={styles.numberCard}>
            <Text>You selected:</Text>
            <NumberContainer number={selectedNumber} />
            <Button
              title="START THE GAME"
              color={Colors.primary}
              onPress={() => {
                dispatch(startGame());
                generateNumber();
              }}
            />
          </Card>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
}
