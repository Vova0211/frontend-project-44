import { greetings } from '../src/cli.js';
import { brainEven } from './brain-even.js';

console.log('Welcome to the Brain Games!');
let name = greetings();
brainEven(name);