import React, { PureComponent } from 'react'

type Props = {
  content: string
}

export default class ListItem extends PureComponent<Props, {}> {
  render() {
    console.log('item render')
    return <div>{this.props.content}</div>
  }
}
