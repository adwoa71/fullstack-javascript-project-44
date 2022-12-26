#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greetingYou, check, result } from '../src/index.js';

let user = greetingYou();


const isEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  let isTrue = true;
  let i = 0
  while (i <=2 && isTrue){
    let randomNum = parseInt(Math.random() * 100)
let correctAnswer = 'yes'
if (!(randomNum % 2) == 0) correctAnswer = 'no'
console.log(`Question: ${randomNum}`)
    let answer = readlineSync.question('Your answer: ');
  isTrue = check(answer, correctAnswer)
    if (isTrue) { i = i + 1 }
      }
  return i
  };

let yourResult = isEven()
result(yourResult, user) 

