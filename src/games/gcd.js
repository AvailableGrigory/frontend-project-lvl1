import * as gameLogic from '../index.js';

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
    const firstNumber = Math.floor(Math.random() * 100);
    const secondNumber = Math.floor(Math.random() * 100);
    const question = `${firstNumber} ${secondNumber}`;
    const answer = `${gcd(firstNumber, secondNumber)}`;

    return [question, answer];
  };

  const description = 'Find the greatest common divisor of given numbers.';

  gameLogic.newGame(QA, description);
};

export default startGame;
