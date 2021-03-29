import { createStore, combineReducers } from 'redux';
import inputReducer from './inputReducer';
import selectedNumberReducer from './selectedNumberReducer';
import confirmReducer from './confirmReducer';
import guessedNumbersReducer from './guessedNumbersReducer';

const rootReducer = combineReducers({
    inputReducer,
    selectedNumberReducer,
    confirmReducer,
    guessedNumbersReducer,
});

const store = createStore(
    rootReducer,
);

export default store;
