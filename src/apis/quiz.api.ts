import { Quiz, QuizListConfig, SuccessResponse } from '../types/quiz.type'
import http from '../utils/http'

const URL = 'type=multiple'

export const quiztApi = {
  getQuiz(params: QuizListConfig) {
    return http.get<SuccessResponse<Quiz[]>>(URL, {
      params
    })
  }
}
