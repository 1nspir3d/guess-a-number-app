export default function startGame(state = false, action) {
  switch (action.type) {
    case 'START_GAME':
      return !state;
    default:
      return state;
  }
}
