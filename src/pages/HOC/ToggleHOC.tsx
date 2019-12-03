import { Button } from 'antd'
import React, { Component } from 'react'

type State = {
  toggle: boolean
}

const ToggleHOC = (WrappedComponent: React.ComponentType) => {
  return class extends Component<State> {
    state = {
      toggle: false,
    }

    handleClick = () => {
      this.setState((prevState: State) => ({
        toggle: !prevState.toggle,
      }))
    }

    render() {
      const { toggle } = this.state
      return (
        <div>
          <Button type="primary" onClick={this.handleClick}>
            click toggle
          </Button>
          {toggle && <WrappedComponent />}
        </div>
      )
    }
  }
}

export default ToggleHOC
