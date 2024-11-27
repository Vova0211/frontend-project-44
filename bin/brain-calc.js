#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greetings } from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = greetings();

console.log('What is the result of the expression?');
const signs = ["+", "-", "*"];
for (let i = 0; i < 3; i++) {
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);
  const sign = Math.floor(Math.random() * 3);
  let result = 0;
  if (sign === 0) {
    result = num1 + num2;
  } else if (sign === 1) {
    result = num1 - num2;
  } else if (sign === 2) {
    result = num1 * num2;
  }
  console.log(`${num1} ${signs[sign]} ${num2}`);
  const answer = readlineSync.question('Your answer: ');
  const res = Number(answer);
  if (res === result) {
    console.log('Correct!');
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
    console.log(`Let's try again, ${name}!`);
    break;
  }
  if (i === 2) {
    console.log(`Congratulations, ${name}!`);
  }
}