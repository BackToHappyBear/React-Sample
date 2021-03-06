import React from 'react'

function ProfilePage(props: { user: string }) {
  const showMessage = () => {
    alert('Followed ' + props.user)
  }

  const handleClick = () => {
    setTimeout(showMessage, 3000)
  }

  return <button onClick={handleClick}>Follow</button>
}

export default ProfilePage
