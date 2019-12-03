import React, { Component } from 'react'

type State = {
  count: number
}

export default class ClassComponent extends Component<{}, State> {
  state: State = {
    count: 0,
  }
  componentDidMount() {
    // NOTE: 解决 class component this更换问题
    // const { count } = this.state
    setTimeout(() => {
      console.log(`You clicked ${this.state.count} times`)
    }, 3000)
  }
  componentDidUpdate() {
    // const { count } = this.state
    setTimeout(() => {
      console.log(`You clicked ${this.state.count} times`)
    }, 3000)
  }
  render() {
    return (
      <div>
        <h2>Class Component</h2>
        <p>You clicked {this.state.count} times</p>
        <button
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        >
          Click me
        </button>
      </div>
    )
  }
}
