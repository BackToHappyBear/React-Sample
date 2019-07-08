import React, { PureComponent, ReactNode } from 'react'
import { IMousePositon } from './index'

interface IProps {
  render: (props: IMousePositon) => ReactNode
}

// tslint:disable-next-line: no-empty-interface
interface IState extends IMousePositon {}

export default class MousePosition extends PureComponent<IProps, IState> {
  public state = {
    x: 0,
    y: 0,
  }

  public componentDidMount() {
    window.addEventListener('mousemove', this.handleMouseMove)
  }

  public componentWillUnmount() {
    window.removeEventListener('mousemove', this.handleMouseMove)
  }

  public handleMouseMove = (event: any) => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    })
  }

  public render() {
    return <div style={{ height: '100%', width: '100%' }}>{this.props.render(this.state)}</div>
  }
}
