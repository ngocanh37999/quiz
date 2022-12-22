export interface QuizListConfig {
  amount?: string
  category?: string
  difficulty?: 'medium' | 'easy' | 'hard'
}

export interface SuccessResponse<Data> {
  response_code: number
  results: Data
}

export interface Quiz {
  category: string
  type: string
  difficulty: string
  question: string
  correct_answer: string
  incorrect_answers: string[]
  _ps: number
}
export interface QuizQuestion extends Quiz {
  answers: string[]
}

export type Question = {
  question: string
  answers: string[]
  _ps: number
}
