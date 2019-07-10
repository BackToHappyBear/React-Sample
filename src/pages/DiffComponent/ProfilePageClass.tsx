import React from 'react'

class ProfilePage extends React.Component<{ user: string }> {
  public showMessage = () => {
    alert('Followed ' + this.props.user)
  }

  public handleClick = () => {
    setTimeout(this.showMessage, 3000)
  }

  public render() {
    return <button onClick={this.handleClick}>Follow</button>
  }
}

export default ProfilePage
