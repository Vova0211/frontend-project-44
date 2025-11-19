import gameEngine from '../gameEngine.js'
import { getRandomNumber } from '../utilites.js'

const rule = 'Find the greatest common divisor of given numbers.'

const answerGcd = (a, b) => {
  if (!b) {
    return a
  }

  return answerGcd(b, a % b)
}

const getQuestionAndAnswer = () => {
  const question = [getRandomNumber(0, 100), getRandomNumber(0, 100)]
  const answer = answerGcd(...question).toString()
  return [question.join(' '), answer]
}

export default () => {
  gameEngine(rule, getQuestionAndAnswer)
}
