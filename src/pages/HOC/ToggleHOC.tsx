import React, { Component } from 'react'

interface IState {
  toggle: boolean
}

const ToggleHOC = (WrappedComponent: React.ComponentType) => {
  return class extends Component<IState> {
    state = {
      toggle: false,
    }

    handleClick = () => {
      this.setState((prevState: IState) => ({
        toggle: !prevState.toggle,
      }))
    }

    render() {
      const { toggle } = this.state
      return (
        <div>
          <button onClick={this.handleClick}>click toggle</button>
          {toggle && <WrappedComponent />}
        </div>
      )
    }
  }
}

export default ToggleHOC
