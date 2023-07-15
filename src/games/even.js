import readlineSync from 'readline-sync';
import { getRandomNumber } from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';
const isEven = (num) => num % 2 === 0;
const countRounds = 3;

const getEvenNum = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
  console.log(description);

  for (let i = 0; i < countRounds; i += 1) {
    const random = getRandomNumber(1, 100);
    const correctAnswer = isEven(random) ? 'yes' : 'no';
    console.log(`Question: ${random}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer !== correctAnswer) {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations ${userName}!`);
};
export default getEvenNum;
