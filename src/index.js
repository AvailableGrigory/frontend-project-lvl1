import readlineSync from 'readline-sync';

export const getAnswer = () => readlineSync.question('Your answer: ');

export const askQuestion = (question) => {
  console.log(`Question: ${question}`);
};

export const compare = (rightAnswer, playerAnswer) => (rightAnswer === playerAnswer);

export const maxRounds = 3;

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
