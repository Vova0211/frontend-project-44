#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greetings } from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = greetings();
let result = true;
console.log('What number is missing in the progression?');
for (let i = 0; i < 3; i++) {
  const step = Math.floor(Math.random() * 15) + 1;
  const random = Math.floor(Math.random() * 10);
  let start = Math.floor(Math.random() * 20) + 1;
  let progress = ``;
  let res = 0;
  for (let i = 0; i < 10; i++) {
    if (i === random) {
      progress += `.. `;
      res = start + step;
    } else {
      progress += `${start + step} `;
    }
    start += step;
  }
  console.log(`Question: ${progress}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === `${res}`) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${res}'.`);
    console.log("Let's try again, Sam!");
    result = false;
    break;
  }
}
if (result === true) {
  console.log(`Congratulations, ${name}!`);
}
