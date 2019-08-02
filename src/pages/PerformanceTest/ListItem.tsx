import React, { PureComponent } from 'react'

interface IProps {
  content: string
}

export default class ListItem extends PureComponent<IProps, {}> {
  public render() {
    console.log('item render')
    return <div>{this.props.content}</div>
  }
}
