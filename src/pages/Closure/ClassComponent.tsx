import React, { Component } from 'react'

export default class ClassComponent extends Component {
  public state = {
    count: 0,
  }
  public componentDidMount() {
    // NOTE: 解决 class component this更换问题
    // const { count } = this.state
    setTimeout(() => {
      console.log(`You clicked ${this.state.count} times`)
    }, 3000)
  }
  public componentDidUpdate() {
    // const { count } = this.state
    setTimeout(() => {
      console.log(`You clicked ${this.state.count} times`)
    }, 3000)
  }
  public render() {
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
