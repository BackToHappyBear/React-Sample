import React from 'react'
import PureComponent from './PureComponent'

export default class PerformanceTest extends React.PureComponent {
  public state = {
    count: 0,
    data: [1, 2, 3],
  }

  public render() {
    const { count, data } = this.state
    return (
      <div>
        <PureComponent data={data} />
        <button onClick={() => this.setState({ count: count + 1 })}>click {count} times</button>
      </div>
    )
  }
}
