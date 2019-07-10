import React, { useEffect, useRef, useState } from 'react'

export default function MessageThread() {
  const [message, setMessage] = useState('')

  // Keep track of the latest value.
  const latestMessage = useRef('')

  useEffect(() => {
    latestMessage.current = message
  }, [message])

  const showMessage = () => {
    alert('You said: ' + latestMessage.current)
  }

  const handleSendClick = () => {
    setTimeout(showMessage, 3000)
  }

  const handleMessageChange = e => {
    setMessage(e.target.value)
  }

  return (
    <>
      <input value={message} onChange={handleMessageChange} />
      <button onClick={handleSendClick}>Send</button>
    </>
  )
}
