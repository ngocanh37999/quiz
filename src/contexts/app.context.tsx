/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from 'react'
import { Question } from 'src/types/quiz.type'

interface AppContextInterface {
  selectedQuestions: Question[]
  setSelectedQuestions: React.Dispatch<React.SetStateAction<Question[]>>

  currentScreen: string
  setCurrentScreen: React.Dispatch<React.SetStateAction<string>>

  currentOption: number | undefined
  setCurrentOption: React.Dispatch<React.SetStateAction<number | undefined>>

  score: any
  setScore: React.Dispatch<React.SetStateAction<any>>

  currentQuestion: number
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>

  time: number | string | null
  setTime: React.Dispatch<React.SetStateAction<number | string | null>>
}

export const getInitialAppContext: () => AppContextInterface = () => ({
  selectedQuestions: [],
  setSelectedQuestions: () => null,

  currentScreen: 'start' || 'end' || 'quiz',
  setCurrentScreen: () => null,

  currentOption: undefined,
  setCurrentOption: () => null,

  score: {},
  setScore: () => null,

  currentQuestion: 0,
  setCurrentQuestion: () => null,

  time: null,
  setTime: () => null
})
const initialAppContext = getInitialAppContext()
export const AppContext = createContext<AppContextInterface>(initialAppContext)
export const AppProvider = ({
  children,
  defaultValue = initialAppContext
}: {
  children: React.ReactNode
  defaultValue?: AppContextInterface
}) => {
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>(defaultValue.selectedQuestions)
  const [currentScreen, setCurrentScreen] = useState(defaultValue.currentScreen)
  const [currentOption, setCurrentOption] = useState<number | undefined>(defaultValue.currentOption)
  const [score, setScore] = useState<any>(defaultValue.score)
  const [currentQuestion, setCurrentQuestion] = useState<number>(defaultValue.currentQuestion)
  const [time, setTime] = useState<number | string | null>(null)

  return (
    <AppContext.Provider
      value={{
        selectedQuestions,
        setSelectedQuestions,

        currentScreen,
        setCurrentScreen,
        currentOption,
        setCurrentOption,
        score,
        setScore,
        currentQuestion,
        setCurrentQuestion,
        time,
        setTime
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
