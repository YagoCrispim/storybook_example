import { useState } from 'react'

export const MainLogic = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }
  return {
    count,
    increment
  }
}
