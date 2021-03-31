export default function confirmReducer(state = false, action) {
  switch (action.type) {
    case 'TOGGLE_CONFIRM':
      return !state;
    default:
      return state;
  }
}
