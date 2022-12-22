/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import MarkdownIt from 'markdown-it'
import { quiztApi } from 'src/apis/quiz.api'
import { QuizListConfig, QuizQuestion } from 'src/types/quiz.type'
import helper from 'src/utils/helper'
import { AppContext } from 'src/contexts/app.context'

export default function useLogicQuiz() {
  const {
    time,
    setTime,
    setCurrentScreen,
    setSelectedQuestions,
    selectedQuestions,
    currentQuestion,
    setCurrentOption,
    currentOption,
    setCurrentQuestion,
    score,
    setScore
  } = useContext(AppContext)

  const queryConfig: QuizListConfig = {
    amount: '5',
    difficulty: 'easy'
    // category: '9',
  }

  const { data } = useQuery({
    queryKey: ['quiz', queryConfig],
    queryFn: () => {
      return quiztApi.getQuiz(queryConfig)
    }
  })

  const quizData = data
    ? data?.data.results
        .map((question) => ({
          ...question,
          answers: helper.shuffleArray([...question.incorrect_answers, question.correct_answer])
        }))
        .map((item) => ({
          ...item,
          _ps: helper.findIndexByValue(item.answers, item.correct_answer)
        }))
    : []

  useEffect(() => {
    setTime(typeof time === 'string' ? 0.5 : '0.5')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setCurrentScreen('start')
  }, [])

  const md = new MarkdownIt()

  const handleStart = () => {
    if (Array.isArray(quizData)) {
      const _questions = quizData.filter((item) => (item._ps as number) >= 0) as QuizQuestion[]
      setSelectedQuestions(helper.randomizeQuestions(_questions).slice(0, 3)) // khi map ra sẽ random xáo trộn 4 item trong array...
      return setCurrentScreen('quiz') // Khi mảng selectedQuestions có dữ liệu thì return sang: setCurrentScreen('quiz')
    }
  }

  const question = selectedQuestions[currentQuestion]

  const scoreArr = Object.entries(score)

  const handleOptionChange = (nextValue: string) => {
    setCurrentOption(Number(nextValue))
    setScore({
      ...score,
      [currentQuestion]: Number(nextValue) === question._ps
    })
  }

  const handleNext = () => {
    if (selectedQuestions.length === Number(currentQuestion) + 1) return setCurrentScreen('end')
    setScore({ ...score, [currentQuestion]: currentOption === question?._ps })
    setCurrentQuestion((prev) => prev + 1)
    setCurrentOption(undefined)
    return setTime(typeof time === 'string' ? 0.5 : '0.5')
  }

  const handleViewAnswer = () => {
    return setCurrentScreen('quiz')
  }

  const handleTakeAnother = () => {
    window.location.href = '/'
  }

  return { handleStart, handleOptionChange, handleViewAnswer, handleTakeAnother, handleNext, question, md, scoreArr }
}
