import { getRandomNumber } from '../utils.js';
import runGameLogic from '../gameLogic.js';

const description = 'What is the result of the expression?';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  const randOperatorIndex = getRandomNumber(0, operators.length);
  return operators[randOperatorIndex];
};

const calculate = (operator, operand1, operand2) => {
  if (operator === '+') {
    return operand1 + operand2;
  }
  if (operator === '-') {
    return operand1 - operand2;
  }
  if (operator === '*') {
    return operand1 * operand2;
  }
  return Error('Incorrect operator');
};

const getInfo = () => {
  const firstOperand = getRandomNumber(1, 100);
  const secondOperand = getRandomNumber(1, 100);
  const operator = getRandomOperator();
  const question = `${firstOperand} ${operator} ${secondOperand}`;
  const correctAnswer = String(calculate(operator, firstOperand, secondOperand));
  return [question, correctAnswer];
};
const run = () => runGameLogic(getInfo, description);
export default run;
