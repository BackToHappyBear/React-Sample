import React, { Component } from 'react'

interface IState {
  visible: boolean
}

interface IInjectedParams extends IState {
  onToggle: () => void
}

interface IProps {
  // TODO: 到底该返回啥子 JSX.Element
  children(params: IInjectedParams): any
}

export default class Toggle extends Component<IProps, IState> {
  public state: IState = {
    visible: false,
  }

  public onToggle = () => {
    this.setState((prevState: IState) => ({
      visible: !prevState.visible,
    }))
  }

  public render() {
    const { visible } = this.state
    const { children } = this.props
    // TODO: 更好的声明方式？
    const { onToggle } = this
    return <div>{children({ visible, onToggle })}</div>
  }
}
