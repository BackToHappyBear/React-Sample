import React, { Component, useRef, useEffect } from 'react'

function useInterval(callback: () => void, delay: number | null) {
  const callbackRef = useRef<() => void | null>()

  useEffect(() => {
    callbackRef.current = callback
  })

  useEffect(() => {
    return () => {
      function tick() {
        callbackRef?.current?.()
      }
      if (delay !== null) {
        const timer = setInterval(tick, delay)
        return clearInterval(timer)
      }
    }
  }, [delay])
}

export default useInterval

type State = {
  count: number
  delay: number
}

export class Counter extends Component<{}, State> {
  state: State = {
    count: 0,
    delay: 1000,
  }

  interval: number | undefined

  componentDidMount() {
    this.interval = window.setInterval(this.tick, this.state.delay)
  }

  componentDidUpdate(prevProps, prevState: State) {
    if (prevState.delay !== this.state.delay) {
      clearInterval(this.interval)
      this.interval = window.setInterval(this.tick, this.state.delay)
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  handleDelayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      delay: Number(e.target.value),
    })
  }

  tick = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }

  render() {
    return (
      <>
        <h1>{this.state.count}</h1>
        <input type="text" value={this.state.delay} onChange={this.handleDelayChange} />
      </>
    )
  }
}
