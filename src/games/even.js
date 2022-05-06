import * as gameLogic from '../index.js';

const startGame = () => {
  const QA = () => {
    const question = Math.floor(Math.random() * 100);
    const answer = question % 2 === 0 ? 'yes' : 'no';

    return [question, answer];
  };

  const description = 'Answer "yes" if the number is even, otherwise answer "no".';

  gameLogic.newGame(QA, description);
};

export default startGame;
