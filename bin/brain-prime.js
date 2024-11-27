#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { greetings } from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = greetings();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
}
let result = true;
for (let i = 0; i < 3; i++) {
  const random = Math.floor(Math.random() * 101);
  console.log(`Question: ${random}`);
  const answer = readlineSync.question('Your answer: ');
  let ans;
  let res = Boolean;
  if (answer === 'no') {
    ans = 'yes';
    res = false;
  } else {
    ans = 'no';
    res = true;
  }
  if (res === isPrime(random)) {
    console.log(`Correct!`);
  } else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${ans}'.`);
    console.log(`Let's try again, ${name}!`);
    result = false;
    break;
  }
}
if (result !== false) console.log(`Congratulations, ${name}!`);