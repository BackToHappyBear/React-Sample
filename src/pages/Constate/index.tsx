import React, { useState } from 'react'
import constate from 'constate'

// 1️⃣ Create a custom hook as usual
function useCounter() {
  const [count, setCount] = useState(0)
  const increment = () => setCount(prevCount => prevCount + 1)
  const decrement = () => setCount(prevCount => prevCount - 1)

  return { count, increment, decrement }
}

// 2️⃣ Wrap your hook with the constate factory
const [CounterProvider, useCounterContext] = constate(useCounter)

function Button() {
  // 3️⃣ Use context instead of custom hook
  const { increment, decrement } = useCounterContext()
  return (
    <>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </>
  )
}

function Count() {
  // 4️⃣ Use context in other components
  const { count } = useCounterContext()
  return <div>{count}</div>
}

function App() {
  // 5️⃣ Wrap your components with Provider
  return (
    <CounterProvider>
      <Count />
      <Button />
    </CounterProvider>
  )
}

export default App
