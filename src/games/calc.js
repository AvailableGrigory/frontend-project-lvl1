import gameEngine from '../index.js';
import randomNumberGenerator from '../randomNumberGenerator.js';

const description = 'What is the result of the expression?';

const generateRound = () => {
  const firstNumber = randomNumberGenerator(0, 11);
  const secondNumber = randomNumberGenerator(0, 11);
  const expressions = [
    [[`${firstNumber} + ${secondNumber}`], [firstNumber + secondNumber]],
    [[`${firstNumber} - ${secondNumber}`], [firstNumber - secondNumber]],
    [[`${firstNumber} * ${secondNumber}`], [firstNumber * secondNumber]],
  ];
  const expression = randomNumberGenerator(0, expressions.length);

  const question = expressions[expression][0];
  const answer = `${expressions[expression][1]}`;

  return [question, answer];
};

const startGame = () => {
  gameEngine(generateRound, description);
};

export default startGame;
