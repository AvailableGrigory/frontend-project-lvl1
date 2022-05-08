import readlineSync from 'readline-sync';

const maxRounds = 3;

export const randomNumberGenerator = (min, max) => Math.floor(Math.random() * (max - min)) + min;

const askQuestion = (question) => {
  console.log(`Question: ${question}`);
};

const getAnswer = () => readlineSync.question('Your answer: ');

const compare = (rightAnswer, playerAnswer) => (rightAnswer === playerAnswer);

export const newGame = (QA, description) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(`${description}`);

  for (let round = 0; round < maxRounds; round += 1) {
    const [roundQuestion, roundAnswer] = QA();

    askQuestion(roundQuestion);
    const playerAnswer = getAnswer();

    if (compare(roundAnswer, playerAnswer)) {
      console.log('Correct!');
      if (round === 2) {
        console.log(`Congratulations, ${playerName}!`);
      }
    } else {
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${roundAnswer}.`);
      console.log(`Let's try again, ${playerName}!`);
      break;
    }
  }
};
