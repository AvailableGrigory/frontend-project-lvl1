import readlineSync from 'readline-sync';

const startGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let counter = 0;

  while (counter < 3) {
    const number = Math.floor(Math.random() * 100);
    const answer = number % 2 === 0 ? 'yes' : 'no';

    console.log(`Question: ${number}`);
    const getAnswer = readlineSync.question('Your answer: ');

    if (getAnswer === answer) {
      console.log('Correct!');
      counter += 1;
      if (counter === 3) {
        console.log(`Congratulations, ${name}`);
      }
    } else {
      console.log(`${getAnswer} is wrong answer ;(. Correct answer was ${answer}.`);
      console.log(`Let's try again, ${name}`);
      break;
    }
  }
};

export default startGame;
