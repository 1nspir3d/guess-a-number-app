import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/reducers';
import Header from './src/components/Header';
import StartGameScreen from './src/screens/StartGameScreen';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.screen}>
        <Header />
        <StartGameScreen />
      </View>
    </Provider>
  );
}
