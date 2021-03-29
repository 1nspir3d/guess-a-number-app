import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import StartGameScreen from './src/screens/StartGameScreen';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default function App() {
  return (
    <View style={styles.screen}>
      <Header />
      <StartGameScreen />
    </View>
  );
}
