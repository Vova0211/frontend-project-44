#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greetings } from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = greetings();
console.log('Find the greatest common divisor of given numbers.');

function NOD () {
  for (var x = arguments[0], i = 1; i < arguments.length; i++) {
    var y = arguments[i];
    while (x && y) {
      x > y ? x %= y : y %= x;
    }
    x += y;
  }
  return x;
}
for (let i = 0; i < 3; i++) {
  let num1 = Math.floor(Math.random() * 101);
  let num2 = Math.floor(Math.random() * 101);
  console.log(`Question: ${num1} ${num2}`);
  const answer = readlineSync.question('Your answer: ');
  if (answer === `${NOD(num1, num2)}`) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${NOD(num1, num2)}'.`);
    console.log(`Let's try again, ${name}!`);
    break
  }
  if (i === 2) {
    console.log(`Congratulations, ${name}!`);
  }
}