import gameEngine from '../index.js';
import randomNumberGenerator from '../randomNumberGenerator.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const generateRound = () => {
  const question = randomNumberGenerator(0, 101);
  const answer = isEven(question) ? 'yes' : 'no';

  return [question, answer];
};

const startGame = () => {
  gameEngine(generateRound, description);
};

export default startGame;
