import React, { Component } from 'react'
import { Button } from 'antd'
import LifeCycle from './LifeCycle'

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
          <LifeCycle />
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
