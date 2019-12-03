import React from 'react'
import { config } from './config'
import List from './List'
import PureComponent from './PureComponent'

export default class PerformanceTest extends React.PureComponent {
  state = {
    count: 0,
    data: [1, 2, 3],
  }

  render() {
    const { count, data } = this.state
    return (
      <div>
        <PureComponent data={data} />
        <button onClick={() => this.setState({ count: count + 1 })}>click {count} times</button>
        <List />
        <br />
        {config.map((v: any) => (
          <div key={v.title}>
            <div>component</div>
            <v.component />
            <div>---------------</div>
          </div>
        ))}
      </div>
    )
  }
}
