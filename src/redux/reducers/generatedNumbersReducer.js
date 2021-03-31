export default function randomNumbersReducer(
  state = { lower: 100, higher: -0 },
  action,
) {
  switch (action.type) {
    case 'SET_LOWER':
      return { ...state, lower: action.number };
    case 'SET_HIGHER':
      return { ...state, higher: action.number };
    default:
      return state;
  }
}
