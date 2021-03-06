import { Button } from 'antd'
import React, { Component } from 'react'

interface IState {
  toggle: boolean
}

const ToggleHOC = (WrappedComponent: React.ComponentType) => {
  return class extends Component<IState> {
    public state = {
      toggle: false,
    }

    public handleClick = () => {
      this.setState((prevState: IState) => ({
        toggle: !prevState.toggle,
      }))
    }

    public render() {
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
