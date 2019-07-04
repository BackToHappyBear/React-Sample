import React, { PureComponent, ReactNode } from 'react'
import { IMousePositon } from './index'

interface IProps {
  render: (props: IMousePositon) => ReactNode
}

interface IState extends IMousePositon {}

export default class MousePosition extends PureComponent<IProps, IState> {
  state = {
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
