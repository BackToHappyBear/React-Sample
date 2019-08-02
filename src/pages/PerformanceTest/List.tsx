import React, { PureComponent } from 'react'
import ListItem from './ListItem'

interface IItem {
  id: number
  content: string
}

function renderArray(num: number) {
  const ret = [{ id: 210000, content: '000' }]
  for (let index = 0; index < num; index++) {
    ret.push({
      id: index,
      content: String(index),
    })
  }
  return ret
}

interface IState {
  count: number
  list: IItem[]
}

export default class List extends PureComponent<{}, IState> {
  public state = {
    count: 0,
    list: renderArray(2),
  }
  public render() {
    const { list, count } = this.state
    return (
      <div>
        {list.map(v => (
          <ListItem key={v.id} content={v.content} />
        ))}
        {/* {list.map(v => {
          console.log('render')
          return <div key={v.id}>另一个{v.content}</div>
        })} */}
        <button onClick={() => this.setState({ count: count + 1 })}>click {count} times</button>
      </div>
    )
  }
}
