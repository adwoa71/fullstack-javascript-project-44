import readlineSync from 'readline-sync';
import { greetingYou, check } from './logic.js';
let user = greetingYou();
console.log('What is the result of expression?');


let CorrectCalc = (operator, num1, num2) => {
   let correctAnswer = num1 + num2;
  if (operator === 1) correctAnswer = num1 - num2;
  if (operator === 2) correctAnswer = num1 * num2;
  console.log(correctAnswer)
  return correctAnswer
}


let calculate = () => {
  let i =0
  while (i <= 2) {
    let operation = ['+', '-', '*']
    let randomOperator = parseInt(Math.random() * 3)
    let Num1 = parseInt(Math.random() * 10);
    let Num2 = parseInt(Math.random() * 10);
    let correctAnswer = CorrectCalc(randomOperator, Num1, Num2)
    console.log(`Question: ${Num1} ${operation[randomOperator]} ${Num2}`);
    let answer = readlineSync.question('Your answer: ')
    let result = check(answer, correctAnswer)
    if (result === false)  i = 4 ;
    if (result === true) { i = i + 1 }
  }
  return i
  }

let result = () => {
  let yourResult = calculate()
  if (yourResult == 3) return console.log(`Congratulations, ${user}!`);
 else return console.log(`Let's try again, ${user}!`)
  }
result()
