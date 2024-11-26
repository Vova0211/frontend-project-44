import readlineSync from 'readline-sync';

export const brainEven = (name) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i++) {
    let random = Math.floor(Math.random() * 100);
    console.log(`Question: ${random}`);
    let answer = readlineSync.question('Your answer: ');
    if ((answer === 'yes' && random % 2 === 0) || (answer === 'no' && random % 2 !== 0)) {
      console.log('Correct!');
    } else if (answer === 'yes') {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      console.log(`Let's try again, ${name}!`);
      return -1;
    } else if (answer === 'no') {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
      console.log(`Let's try again, ${name}!`)
      return -1;
    } else {
      console.log(`Let's try again, ${name}!`);
    }
  }
  console.log(`Congratulations, ${name}!`);
};