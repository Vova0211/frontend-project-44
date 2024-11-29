#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greetings } from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = greetings();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

for (let i = 0; i < 3; i++) {
    const random = Math.floor(Math.random() * 101);
    console.log(`Question: ${random}`);
    const answer = readlineSync.question('Your answer: ');
    /*let ans;
    // let res = Boolean;
    if (answer === 'no') {
      ans = 'yes';
      // res = false;
    } else if (answer === 'yes' || random % 2 !== 0) {
      ans = 'no';
      // res = true;
    } else if (random % 2 === 0) {
      ans = 'yes';
    }*/
      if ((answer === 'yes' && random % 2 === 0) || (answer === 'no' && random % 2 !== 0)) {
        console.log('Correct!');
      } else if (answer === 'yes') {
        console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
        console.log(`Let's try again, ${name}!`);
        break;
      } else if (answer === 'no') {
        console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
        console.log(`Let's try again, ${name}!`);
        break;
      } else if (random % 2 === 0){
        console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`);
        console.log(`Let's try again, ${name}!`);
        break;
      } else {
      // console.log(`'${answer}' is wrong answer ;(. Correct answer was '${ans}'.`);
      console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
  if (i === 2) {
    console.log(`Congratulations, ${name}!`);
  }
}