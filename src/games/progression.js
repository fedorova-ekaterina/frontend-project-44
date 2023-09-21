import { getRandomNumber } from '../utils.js';
import runGameLogic from '../gameLogic.js';

const description = 'What number is missing in the progression?';
const progressionLength = 10;

const generateArray = () => {
  const step = getRandomNumber(1, 10);
  const firstNumber = getRandomNumber(1, 100);

  const result = [];
  for (let i = 0; i <= progressionLength; i += 1) {
    result.push(firstNumber + i * step);
  }
  return result;
};

const getInfo = () => {
  const result = generateArray();
  const hiddenIndex = getRandomNumber(0, progressionLength - 1);
  const correctAnswer = String(result[hiddenIndex]);
  result[hiddenIndex] = '..';
  const question = result.join(' ');
  return [question, correctAnswer];
};
const run = () => runGameLogic(getInfo, description);
export default run;
