import { getRandomNumber } from '../utils.js';
import runGameLogic from '../gameLogic.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getInfo = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isPrime(question) === true ? 'yes' : 'no';
  return [question, correctAnswer];
};
const run = () => runGameLogic(getInfo, description);
export default run;
