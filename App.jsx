/* eslint-disable global-require */
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import store from './src/redux/reducers';
import Header from './src/components/Header';
import StartGameScreen from './src/screens/StartGameScreen';
import GameScreen from './src/screens/GameScreen';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

function fetchFonts() {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
    'reggae-one': require('./assets/fonts/ReggaeOne-Regular.ttf'),
  });
}

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={() => { }}
      />
    );
  }

  return (
    <Provider store={store}>
      <View style={styles.screen}>
        <Header />
        <StartGameScreen />
        <GameScreen />
      </View>
    </Provider>
  );
}
