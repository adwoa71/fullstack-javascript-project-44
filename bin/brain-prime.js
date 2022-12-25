#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greetingYou, check, result} from '../src/index.js';
let user = greetingYou();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

let isPrime = (a) => {
  if (a === 2) return 'yes'
  if ((a % 2) == 0) return "no"
  let b = 3;
  while ((a > b)) {
    if((a % b) == 0 ) return 'yes';
    else b = b + 2
  }
  return 'no'
 }
let isPrimeGame = () => {
   let isTrue = true;
  let i = 0
  while (i <=2 && isTrue){
    let Num1 = parseInt(Math.random() * 100);
    let correctAnswer = isPrime(Num1)
    console.log(correctAnswer);
    console.log(`Question: ${Num1}`);
    let answer = readlineSync.question('Your answer: ')
    isTrue = check(answer, correctAnswer)
    if (isTrue) { i = i + 1 }
      }
  return i
}
  let yourResult = isPrimeGame();
result(yourResult, user)