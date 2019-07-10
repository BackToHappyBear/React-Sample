import React, { useRef } from 'react'

export default function ProfilePageHook(props: { user: string }) {
  const latestUser = useRef(props.user)

  const showMessage = () => {
    alert('Followed ' + latestUser.current)
  }

  const handleClick = () => {
    setTimeout(showMessage, 2000)
  }

  return <button onClick={handleClick}>Follow</button>
}
