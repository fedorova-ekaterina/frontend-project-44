import { getRandomNumber } from '../utils.js';
import runGameLogic from '../gameLogic.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';
const isEven = (num) => num % 2 === 0;

const getInfo = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isEven(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};
const run = () => runGameLogic(getInfo, description);
export default run;
