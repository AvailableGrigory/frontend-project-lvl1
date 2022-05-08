import { randomNumberGenerator, newGame } from '../index.js';

const gcd = (firstNumber, secondNumber) => {
  if (firstNumber < secondNumber) {
    return gcd(secondNumber, firstNumber);
  }
  if (firstNumber % secondNumber === 0) {
    return secondNumber;
  }
  return gcd(firstNumber % secondNumber, secondNumber);
};

const startGame = () => {
  const QA = () => {
    const firstNumber = randomNumberGenerator(0, 101);
    const secondNumber = randomNumberGenerator(0, 101);
    const question = `${firstNumber} ${secondNumber}`;
    const answer = `${gcd(firstNumber, secondNumber)}`;

    return [question, answer];
  };

  const description = 'Find the greatest common divisor of given numbers.';

  newGame(QA, description);
};

export default startGame;
