import readlineSync from 'readline-sync'
import { greetings } from './cli.js'

const roundsCount = 3

export default (rule, getQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!')
  const userName = greetings()
  console.log(rule)
  let round = 0

  while (round < roundsCount) {
    const [question, correctAnswer] = getQuestionAndAnswer()
    console.log(`Question: ${question}`)
    const userAnswer = readlineSync.question('Your answer: ')

    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }

    console.log('Correct!')
    round += 1
  }
  console.log(`Congratulations, ${userName}!`)
}
