#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greetingYou, check, iter, result} from '../src/index.js';
let user = greetingYou();
console.log('What is the result of expression?');


let CorrectCalc = (operator, num1, num2) => {
   let correctAnswer = num1 + num2;
  if (operator === 1) correctAnswer = num1 - num2;
  if (operator === 2) correctAnswer = num1 * num2;
    return correctAnswer
}


let calculate = () => {
   let isTrue = true;
  let i = 0
  while (i <=2 && isTrue){
    let operation = ['+', '-', '*']
    let randomOperator = parseInt(Math.random() * 3)
    let Num1 = parseInt(Math.random() * 10);
    let Num2 = parseInt(Math.random() * 10);
    let correctAnswer = CorrectCalc(randomOperator, Num1, Num2)
    console.log(`Question: ${Num1} ${operation[randomOperator]} ${Num2}`);
    let answer = readlineSync.question('Your answer: ')
  isTrue = check(answer, correctAnswer)
      if (isTrue) { i = i + 1 }
      }
  return i
}
  let yourResult = calculate();
result(yourResult, user)
