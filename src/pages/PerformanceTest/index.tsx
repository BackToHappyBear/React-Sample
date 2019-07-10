import React from 'react'
import PureComponent from './PureComponent'

export default class PerformanceTest extends React.PureComponent {
  public state = {
    count: 0,
  }

  public render() {
    return (
      <div>
        <PureComponent />
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          click {this.state.count} times
        </button>
      </div>
    )
  }
}
