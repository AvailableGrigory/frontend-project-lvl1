import gameEngine from '../index.js';
import randomNumberGenerator from '../randomNumberGenerator.js';

const description = 'What number is missing in the progression?';

const generateRound = () => {
  const progression = [];
  const progressionLength = randomNumberGenerator(5, 11);
  const questionPosition = randomNumberGenerator(0, progressionLength - 1);
  const progressionSize = randomNumberGenerator(1, 11);
  const startNumber = randomNumberGenerator(0, 101);

  for (let i = 0; i < progressionLength; i += 1) {
    if (i === 0) {
      progression.push(startNumber);
    } else {
      progression.push(progression[i - 1] + progressionSize);
    }
  }

  const answer = `${progression[questionPosition]}`;
  progression[questionPosition] = '..';
  const question = progression.toString().replaceAll(',', ' ');

  return [question, answer];
};

const startGame = () => {
  gameEngine(generateRound, description);
};

export default startGame;
