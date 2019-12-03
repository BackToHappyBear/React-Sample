import React, { PureComponent, ReactNode } from 'react'
import { MousePositon } from './index'

type State = MousePositon
type Props = {
  render(props: MousePositon): ReactNode
}

export default class MousePosition extends PureComponent<Props, State> {
  state: State = {
    x: 0,
    y: 0,
  }

  componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove)
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove)
  }

  handleMouseMove = (event: any) => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    })
  }

  render() {
    return <div style={{ height: '100%', width: '100%' }}>{this.props.render(this.state)}</div>
  }
}
