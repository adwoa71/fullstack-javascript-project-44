#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greetingYou, check, result} from '../src/index.js';
let user = greetingYou();
console.log('What number is missing in the progression?')

let progressionBild = (startNumber, length, step, missingPosition) => {
  let progression = []
  for (let i = 0; i <= length; i++){
    if (i === missingPosition) { progression.push('..'); i += 1 }
     progression.push(startNumber + i * step)
  }
  return progression
}

let progressionGame = () => {
  let isTrue = true;
  let i = 0
  while (i <=2 && isTrue){
    let Num1 = parseInt(Math.random() * 100);
    let Num2 = parseInt(Math.random() * 10 + 5);
    let Num3 = parseInt(Math.random() * 10);
    let Num4 = parseInt(Math.random() * Num2);
    let correctAnswer = Num1 + Num3 * Num4
    console.log(`Question: ${progressionBild(Num1, Num2, Num3, Num4)}`);
    let answer = readlineSync.question('Your answer: ')
    isTrue = check(answer, correctAnswer)
    if (isTrue) { i = i + 1 }
    else {i = 4}
  }
  return i
}
  let yourResult = progressionGame();
result(yourResult, user)
