#!/usr/bin/env node
import readlineSync from 'readline-sync';

let greetingYou = () => {
  let userName = readlineSync.question('May I have your name? ');
  console.log('Hi ' + userName + '!');
  return userName
};

console.log('Welcome to the Brain Games!')
let user = greetingYou();
console.log('Answer "yes" if the number is even, otherwise answer "no".')

const isEven = () => {
  for (let i = 1; i <= 3;) {
    let randomNum = parseInt(Math.random() * 100)
let correctAnswer = 'yes'
if (!(randomNum % 2) == 0) correctAnswer = 'no'
console.log(`Question: ${randomNum}`)
    let answer = readlineSync.question('Your answer: ');
  if (correctAnswer == answer) {
    console.log('Correct!');
    i += 1;
  }
   else {
     console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`)
    console.log(`Let's try again, ${user}!`)
    i = 5;
    }
       if (i === 4) console.log(`Congratulations, ${user}!`)
     }
  };

isEven(); 
