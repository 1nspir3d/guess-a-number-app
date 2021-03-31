import { createStore, combineReducers } from 'redux';
import inputReducer from './inputReducer';
import selectedNumberReducer from './selectedNumberReducer';
import confirmReducer from './confirmReducer';
import generatedNumbersReducer from './generatedNumbersReducer';
import startGameReducer from './startGameReducer';
import randomNumberReducer from './randomNumberReducer';
import winReducer from './winReducer';

const rootReducer = combineReducers({
  inputReducer,
  selectedNumberReducer,
  confirmReducer,
  generatedNumbersReducer,
  startGameReducer,
  randomNumberReducer,
  winReducer,
});

const store = createStore(rootReducer);

export default store;
