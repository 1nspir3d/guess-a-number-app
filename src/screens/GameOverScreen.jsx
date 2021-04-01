import React from 'react';
import {
 View, Text, StyleSheet, Button,
} from 'react-native';
import { useSelector } from 'react-redux';
import Card from '../components/Card';
import Colors from '../constans/colors';

const styles = StyleSheet.create({
  winWindow: {
    width: 300,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  text: {
    fontSize: 20,
  },
});

export default function GameOverScreen({ newGame, number }) {
    const rounds = useSelector((state) => state.roundsReducer);
  return (
    <Card style={styles.winWindow}>
      <View style={{ alignItems: 'center', textAlign: 'center', fontSize: 30 }}>
        <Text style={styles.text}>Game is over</Text>
        <Text style={styles.text}>{`Number of rounds: ${rounds}`}</Text>
        <Text style={styles.text}>{`Your number was: ${number}`}</Text>
        <Button title="Restart" color={Colors.primary} onPress={newGame} />
      </View>
    </Card>
  );
}
