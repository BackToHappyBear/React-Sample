import React from 'react'

function Logger(props) {
  console.log(`${props.label} rendered`)
  return null // what is returned here is irrelevant...
}

function Counter(props) {
  const [count, setCount] = React.useState(0)
  const increment = () => setCount(c => c + 1)
  return (
    <div>
      <button onClick={increment}>The count is {count}</button>
      {props.logger}
    </div>
  )
}

export default function() {
  return <Counter logger={<Logger label="counter" />} />
}
