import { Button } from 'antd'
import React from 'react'
import { useImmerReducer } from 'use-immer'

const initialState = {
  count: 0,
}

export function increment(number: number) {
  return {
    type: 'INCREMENT',
    number,
  } as const
}

export function decrement(number: number) {
  return {
    type: 'DECREMENT',
    number,
  } as const
}

type State = typeof initialState
type Action = ReturnType<typeof increment | typeof decrement>

function reducer(state: State, action: Action) {
  switch (action.type) {
    case 'INCREMENT': {
      state.count = state.count + action.number
      return
    }
    case 'DECREMENT': {
      state.count = state.count - action.number
      return
    }
    default:
      return
  }
}

export default function Counter() {
  const [state, dispatch] = useImmerReducer(reducer, initialState)
  return (
    <>
      Count: {state.count}
      <div>
        <Button
          type="default"
          onClick={() => dispatch({ type: 'INCREMENT', number: 1 })}
          style={{ margin: '10px 10px 0 0' }}
        >
          +
        </Button>
        <Button type="danger" onClick={() => dispatch({ type: 'DECREMENT', number: 2 })}>
          -
        </Button>
      </div>
    </>
  )
}
