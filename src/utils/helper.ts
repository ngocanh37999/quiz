/* eslint-disable @typescript-eslint/no-explicit-any */
import DOMPurify from 'dompurify'
import { Question } from '../types/quiz.type'

let intervalId: string | number | NodeJS.Timeout | undefined

class Helper {
  randomizeQuestions: (arr: Array<Question>) => Question[]
  refineHtml: (str: string) => string
  sanitizedData: (data: string) => { __html: string }
  getStore: (scoreArr: [string, unknown][]) => number
  shuffleArray: (array: any[]) => any[]
  findIndexByValue: (arraytosearch: Array<any>, valuetosearch: string) => number | null

  constructor() {
    this.randomizeQuestions = (arr: Array<Question>) => arr.sort(() => Math.random() - 0.5)
    this.refineHtml = (str: string) => {
      const newDiv = document.createElement('div')
      newDiv.innerHTML = str
      const anchors = newDiv.querySelectorAll('a')
      if (anchors) {
        anchors.forEach((a) => {
          a.href = '#'
          a.innerHTML = ''
        })
      }
      return newDiv.innerHTML
    }
    this.sanitizedData = (data: string) => ({
      __html: this.refineHtml(DOMPurify.sanitize(data))
    })
    this.getStore = (scoreArr: [string, unknown][]) => {
      const score = scoreArr.filter(([, value]) => value).length
      return score
    }
    this.shuffleArray = (array: any[]) => [...array].sort(() => Math.random() - 0.5)
    this.findIndexByValue = (arraytosearch: Array<any>, valuetosearch: string) => {
      for (let i = 0; i < arraytosearch.length; i++) {
        if (arraytosearch[i] === valuetosearch) {
          return i
        }
      }
      return null
    }
  }
  startTimer(duration: number, display: React.Dispatch<React.SetStateAction<string>>, handleNext: () => void) {
    let timer = duration
    let minutes
    let seconds
    if (intervalId) clearInterval(intervalId)
    intervalId = setInterval(() => {
      minutes = parseInt(`${timer / 60}`, 10)
      seconds = parseInt(`${timer % 60}`, 10)

      minutes = minutes < 10 ? `0${minutes}` : minutes
      seconds = seconds < 10 ? `0${seconds}` : seconds
      display(`${minutes}:${seconds}`)

      // eslint-disable-next-line no-plusplus
      if (--timer < 0) {
        timer = 0
        if (intervalId) clearInterval(intervalId)
        handleNext()
      }
    }, 1000)
  }

  uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0
      const v = c === 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })
  }
}

const helper = new Helper()
export default helper
