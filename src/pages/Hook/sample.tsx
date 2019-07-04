import React, { useState, useEffect } from 'react'
import { Button } from 'antd'

export default function Example() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `You clicked ${count} times`
  }, [count])

  return (
    <>
      <p>You clicked ${count} times</p>
      <Button type="default" onClick={() => setCount(count + 1)}>
        click me!
      </Button>
    </>
  )
}
