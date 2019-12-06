import React, { Component } from 'react'

type State = {
  firstname: string
  lastname: string
  windowWidth: number
}

export default class Old extends Component<{}, State> {
  state: State = {
    firstname: '',
    lastname: '',
    windowWidth: 0,
  }

  componentDidMount() {
    document.title = this.state.firstname + ' ' + this.state.lastname
    this.setState({
      windowWidth: window.innerWidth,
    })
    window.addEventListener('resize', this.handleResize)
  }

  componentDidUpdate(prevProps, prevState: State) {
    const { firstname, lastname } = this.state
    if (firstname !== prevState.firstname || lastname !== prevState.lastname) {
      document.title = this.state.firstname + ' ' + this.state.lastname
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  handleFirstnameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      firstname: e.target.value,
    })
  }

  handleLastnameChange = e => {
    this.setState({
      lastname: e.target.value,
    })
  }

  handleResize = () => {
    this.setState({
      windowWidth: window.innerWidth,
    })
  }

  render() {
    const { firstname, lastname, windowWidth } = this.state
    return (
      <>
        Firstname:
        <input type="text" value={firstname} onChange={this.handleFirstnameChange} />
        Lastname:
        <input type="text" value={lastname} onChange={this.handleLastnameChange} />
        <div>window width is {windowWidth}</div>
      </>
    )
  }
}
