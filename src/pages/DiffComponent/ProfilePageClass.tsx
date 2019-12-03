import React from 'react'

class ProfilePage extends React.Component<{ user: string }> {
  showMessage = () => {
    alert('Followed ' + this.props.user)
  }

  handleClick = () => {
    setTimeout(this.showMessage, 3000)
  }

  render() {
    return <button onClick={this.handleClick}>Follow</button>
  }
}

export default ProfilePage
