#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greetingYou, check, result} from './logic.js';
let user = greetingYou();
console.log('Find the greatest common division of given numbers.')

let gcd = (a, b) => {
  if (b > a) { let temp = a; a = b; b = temp };
  while (true) {
    if(b == 0) return a;
    a %= b;
    if (a == 0) return b;
    b %= a
  }
 }
let gcdGame = () => {
  let i = 0
  while (i <= 2) {
    let Num1 = parseInt(Math.random() * 100);
    let Num2 = parseInt(Math.random() * 100);
    let correctAnswer = gcd(Num1, Num2)
    console.log(`Question: ${Num1} ${Num2}`);
    let answer = readlineSync.question('Your answer: ')
    let result = check(answer, correctAnswer)
    if (result === false)  i = 4 ;
    if (result === true) { i = i + 1 }
  }
  return i
}
  let yourResult = gcdGame();
result(yourResult, user)
