import { useState, useEffect } from 'react'
import styles from '../styles/Timer.module.css'

export default function Timer() {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let intervalId
    if (isRunning) {
      intervalId = setInterval(() => {
        setTime(prevTime => prevTime + 1)
      }, 1000)
    }
    return () => clearInterval(intervalId)
  }, [isRunning])

  const handleStart = () => {
    setIsRunning(true)
  }

  const handlePause = () => {
    setIsRunning(false)
  }

  const handleReset = () => {
    setIsRunning(false)
    setTime(0)
  }

  const formatTime = (timeInSeconds) => {
    const hours = Math.floor(timeInSeconds / 3600)
    const minutes = Math.floor((timeInSeconds % 3600) / 60)
    const seconds = timeInSeconds % 60
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>计时器</h1>
      <div className={styles.timer}>{formatTime(time)}</div>
      <div className={styles.buttons}>
        {!isRunning ? (
          <button className={styles.button} onClick={handleStart}>开始</button>
        ) : (
          <button className={styles.button} onClick={handlePause}>暂停</button>
        )}
        <button className={styles.button} onClick={handleReset}>重置</button>
      </div>
    </div>
  )
} 