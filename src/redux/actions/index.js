export function setInput(inputText) {
  return {
    type: 'SET_INPUT',
    inputText,
  };
}

export function setSelectedNumber(number) {
  return {
    type: 'SET_NUMBER',
    number,
  };
}

export function toggleConfirm() {
  return {
    type: 'TOGGLE_CONFIRM',
  };
}

export function setRandomNumber(number) {
  return {
    type: 'SET_RANDOM',
    number,
  };
}

export function setLowerThan(number) {
  return {
    type: 'SET_LOWER',
    number,
  };
}

export function setHigherThan(number) {
  return {
    type: 'SET_HIGHER',
    number,
  };
}

export function startGame() {
  return {
    type: 'START_GAME',
  };
}

export function win() {
    return {
        type: 'TOGGLE_WIN',
    };
}
