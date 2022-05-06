import * as gameLogic from '../index.js';

const startGame = () => {
  const QA = () => {
    const firstNumber = Math.floor(Math.random() * 10);
    const secondNumber = Math.floor(Math.random() * 10);
    const expressions = [
      [[`${firstNumber} + ${secondNumber}`], [firstNumber + secondNumber]],
      [[`${firstNumber} - ${secondNumber}`], [firstNumber - secondNumber]],
      [[`${firstNumber} * ${secondNumber}`], [firstNumber * secondNumber]],
    ];
    const expression = Math.floor(Math.random() * 3);

    const question = expressions[expression][0];
    const answer = `${expressions[expression][1]}`;

    return [question, answer];
  };

  const description = 'What is the result of the expression?';

  gameLogic.newGame(QA, description);
};

export default startGame;
