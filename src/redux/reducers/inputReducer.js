export default function inputReducer(state = '', action) {
  switch (action.type) {
    case 'SET_INPUT':
      return action.inputText;
    default:
      return state;
  }
}
