import { Button } from 'antd'
import React, { useContext } from 'react'
import { useImmerReducer } from 'use-immer'
import { initialState, reducer, State, Action } from './reducer'

type ContextProps = {
  countState: State
  countDispatch: React.Dispatch<Action>
}

const CountContext = React.createContext<ContextProps>({
  countState: initialState,
  countDispatch: () => {},
})

export default function App() {
  return (
    <CounterProvider>
      <ChildComponent />
      <ChildComponent2 />
    </CounterProvider>
  )
}

// NOTE: little known react optimization
// state change, since children cannot have changed,
// it automatically BAILS OUT of trying to update the children
// No need for sCU, memo, etc
export const CounterProvider: React.FC = props => {
  const [state, dispatch] = useImmerReducer(reducer, initialState)
  return (
    <CountContext.Provider value={{ countState: state, countDispatch: dispatch }}>
      {props.children}
    </CountContext.Provider>
  )
}

const ChildComponent = () => {
  const { countState, countDispatch } = useContext(CountContext)
  console.log('childcomponent')
  return (
    <>
      <div>Count: {countState.count}</div>
      <Button
        type="default"
        onClick={() => countDispatch({ type: 'INCREMENT', number: 1 })}
        style={{ margin: '10px 10px 0 0' }}
      >
        +
      </Button>
      <Button type="danger" onClick={() => countDispatch({ type: 'DECREMENT', number: 2 })}>
        -
      </Button>
    </>
  )
}

const ChildComponent2 = () => {
  console.log('childcomponent2')
  return <div>123</div>
}
