import readlineSync from 'readline-sync';

 let greetingYou = () => {
  console.log('Welcome to the Brain Games!');
  let userName = readlineSync.question('May I have your name? ');
  console.log('Hi ' + userName + '!');
  return userName
};

let check = (answer, correctAnswer) => {
  if (answer == correctAnswer) {
    console.log('Correct!')
    return true
  }
  else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`)
    return false
  }
}
let i = 0
let iter = (isTrue) => {
  console.log(isTrue)
  
  if (!isTrue) { console.log(i); return i = 4 }
  else {
    while (i <= 2) {
      { i = i + 1; console.log(i); return i }
            
    }
  }
}


   
  
let result = (yourResult, user) => {
  if (yourResult == 3) return console.log(`Congratulations, ${user}!`);
 else return console.log(`Let's try again, ${user}!`)
   }

    export {greetingYou, check, iter, result}



