import { randomNumberGenerator, newGame } from '../index.js';

const startGame = () => {
  const QA = () => {
    const firstNumber = randomNumberGenerator(0, 11);
    const secondNumber = randomNumberGenerator(0, 11);
    const expressions = [
      [[`${firstNumber} + ${secondNumber}`], [firstNumber + secondNumber]],
      [[`${firstNumber} - ${secondNumber}`], [firstNumber - secondNumber]],
      [[`${firstNumber} * ${secondNumber}`], [firstNumber * secondNumber]],
    ];
    const expression = randomNumberGenerator(0, 3);

    const question = expressions[expression][0];
    const answer = `${expressions[expression][1]}`;

    return [question, answer];
  };

  const description = 'What is the result of the expression?';

  newGame(QA, description);
};

export default startGame;
