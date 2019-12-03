import { Button } from 'antd'
import React, { useReducer } from 'react'

type State = {
  count: number
}

type IncrementAction = {
  type: 'increment'
  payload: number
}

type DecrementAction = {
  type: 'decrement'
  payload: number
}

type Action = IncrementAction | DecrementAction

const initialState: State = {
  count: 0,
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload }
    case 'decrement':
      return { count: state.count - action.payload }
    default:
      return state
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      Count: {state.count}
      <div>
        <Button
          type="default"
          onClick={() => dispatch({ type: 'increment', payload: 1 })}
          style={{ margin: '10px 10px 0 0' }}
        >
          +
        </Button>
        <Button type="danger" onClick={() => dispatch({ type: 'decrement', payload: 2 })}>
          -
        </Button>
      </div>
    </>
  )
}
