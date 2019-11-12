import React, { useEffect, useState } from 'react'

export default function FunctionComponent() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    setTimeout(() => {
      console.log(`You clicked ${count} times`)
    }, 3000)
  })

  // NOTE: change like class component
  // const ref = useRef(count)
  // useEffect(() => {
  //   ref.current = count
  //   setTimeout(() => {
  //     console.log(`You clicked ${ref.current} times`)
  //   }, 2000)
  // }, [count])

  return (
    <div>
      <p>Function Component</p>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}
