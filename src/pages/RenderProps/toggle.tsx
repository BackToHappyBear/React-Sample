import React, { Component } from 'react'

interface IState {
  visible: boolean
}

interface InjectedParams extends IState {
  onToggle: () => void
}

interface IProps {
  // TODO: 到底该返回啥子 JSX.Element
  children(params: InjectedParams): any
}

export default class Toggle extends Component<IProps, IState> {
  state: IState = {
    visible: false,
  }

  onToggle = () => {
    this.setState((prevState: IState) => ({
      visible: !prevState.visible,
    }))
  }

  render() {
    const { visible } = this.state
    const { children } = this.props
    // TODO: 更好的声明方式？
    const { onToggle } = this
    return <div>{children({ visible, onToggle })}</div>
  }
}
