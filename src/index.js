import readlineSync from 'readline-sync';

const countRounds = 3;

const askQuestion = (question) => {
  console.log(`Question: ${question}`);
};

const gameEngine = (QA, description) => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);
  console.log(`${description}`);

  for (let round = 0; round < countRounds; round += 1) {
    const [roundQuestion, roundAnswer] = QA();

    askQuestion(roundQuestion);
    const playerAnswer = readlineSync.question('Your answer: ');

    if (roundAnswer === playerAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${playerAnswer} is wrong answer ;(. Correct answer was ${roundAnswer}.`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${playerName}!`);
};

export default gameEngine;
