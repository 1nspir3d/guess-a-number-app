export default function guessedNumbersReducer(state = { lower: -0, higher: -0 }, action) {
    switch (action.type) {
        case 'SET_LOWER':
            return { ...state, lower: action.number };
        case 'SET_HIGHER':
            return { ...state, higher: action.number };
        default:
            return state;
    }
}
