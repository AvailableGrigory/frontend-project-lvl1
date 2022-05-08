import { randomNumberGenerator, newGame } from '../index.js';

const startGame = () => {
  const QA = () => {
    const question = randomNumberGenerator(0, 101);
    const answer = question % 2 === 0 ? 'yes' : 'no';

    return [question, answer];
  };

  const description = 'Answer "yes" if the number is even, otherwise answer "no".';

  newGame(QA, description);
};

export default startGame;
