import { useEffect, useState } from 'react'
import helper from '../../utils/helper'

export default function Timer({ time, handleNext }: { time: number | string | null; handleNext: () => void }) {
  const [timer, setTimer] = useState<string>('00:00')

  useEffect(() => {
    if (time) helper.startTimer(Number(time.toString()) * 60, setTimer, handleNext)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [time])

  return <span>{timer}</span>
}
