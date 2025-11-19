import gameEngine from '../gameEngine.js'
import { getRandomNumber, randomEquasion } from '../utilites.js'

const rule = 'What is the result of the expression?'

const getQuestionAndAnswer = () => {
  const equasion = randomEquasion(getRandomNumber(0, 100), getRandomNumber(0, 100))
  return [equasion['equasion'], equasion['result']]
}

export default () => {
  gameEngine(rule, getQuestionAndAnswer)
}
