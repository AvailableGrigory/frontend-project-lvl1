import gameEngine from '../index.js';
import randomNumberGenerator from '../randomNumberGenerator.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = (firstNumber, secondNumber) => {
  if (!secondNumber) {
    return firstNumber;
  }

  return gcd(secondNumber, firstNumber % secondNumber);
};

const generateRound = () => {
  const firstNumber = randomNumberGenerator(0, 101);
  const secondNumber = randomNumberGenerator(0, 101);
  const question = `${firstNumber} ${secondNumber}`;
  const answer = `${gcd(firstNumber, secondNumber)}`;

  return [question, answer];
};

const startGame = () => {
  gameEngine(generateRound, description);
};

export default startGame;
