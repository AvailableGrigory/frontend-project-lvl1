import * as gameLogic from '../index.js';

const randomNumberGenerator = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const startGame = () => {
  const QA = () => {
    const question = randomNumberGenerator(0, 101);
    const answer = isPrime(question) ? 'yes' : 'no';
    return [question, answer];
  };

  const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

  gameLogic.newGame(QA, description);
};

export default startGame;
