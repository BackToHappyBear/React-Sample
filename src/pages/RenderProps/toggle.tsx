import React, { Component } from 'react'

type State = {
  visible: boolean
}

type Props = {
  children(params: State & { onToggle(): void }): React.ReactNode
}

export default class Toggle extends Component<Props, State> {
  state: State = {
    visible: false,
  }

  onToggle = () => {
    this.setState(prevState => ({
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
