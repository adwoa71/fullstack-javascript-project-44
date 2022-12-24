#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greetingYou, check, result } from './logic.js'

let user = greetingYou();


const isEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  let i = 0;
  while (i <=2 ){
    let randomNum = parseInt(Math.random() * 100)
let correctAnswer = 'yes'
if (!(randomNum % 2) == 0) correctAnswer = 'no'
console.log(`Question: ${randomNum}`)
    let answer = readlineSync.question('Your answer: ');
  let result = check(answer, correctAnswer)
    if (result === false)  i = 4 ;
    if (result === true) { i = i + 1 }
  }
  return i
  };

let yourResult = isEven()
result(yourResult, user) 

