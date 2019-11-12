import React, { Component } from 'react'

interface IState {
  visible: boolean
}

interface IInjectedParams extends IState {
  onToggle: () => void
}

interface IProps {
  children(params: IInjectedParams): JSX.Element
}

export default class Toggle extends Component<IProps, IState> {
  state = {
    visible: false,
  }

  onToggle = () => {
    this.setState((prevState: IState) => ({
      visible: !prevState.visible,
    }))
  }

  render() {
    const { visible } = this.state
    // TODO: 更好的声明方式？
    const { onToggle } = this
    return <div>{this.props.children({ visible, onToggle })}</div>
  }
}
