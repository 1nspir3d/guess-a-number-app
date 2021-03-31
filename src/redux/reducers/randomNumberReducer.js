export default function randomNumberReducer(state = '', action) {
  switch (action.type) {
    case 'SET_RANDOM':
      return action.number;
    default:
      return state;
  }
}
