export const initialState = {
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

export type State = typeof initialState
export type Action = ReturnType<typeof increment | typeof decrement>

export function reducer(state: State, action: Action) {
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
