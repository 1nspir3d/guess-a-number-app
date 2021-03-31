export default function numberGenerator(
    // eslint-disable-next-line
  state = function randomNumberGenerator(number) {
    const random = Math.floor(Math.random() * 100);
    if (random >= number.lower || random < number.higher) {
      randomNumberGenerator();
    } else {
      return random;
    }
    console.log(number);
  },
) {
  return state;
}
