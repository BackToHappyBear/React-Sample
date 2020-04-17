import { useEffect, useRef } from 'react'

export function useInterval(callback: () => void, delay: number) {
  const saveCallback = useRef<() => void | null>()

  useEffect(() => {
    saveCallback.current = callback
  }, [callback])

  useEffect(() => {
    function tick() {
      saveCallback?.current?.()
    }

    if (delay !== null) {
      const tId = setInterval(tick, delay)
      return clearInterval(tId)
    }
  }, [delay])
}

// NOTE: 如果 useEffect 没有依赖，虽然保证了每次执行以及最新的 count 值，但是会不停的创建、销毁定时器
// NOTE: 而定时器是一个异步事件，会进入事件队列的，所以有可能会发生 interval 根本没有执行的情况
// NOTE: 如果 useEffect 依赖为[]，那么 count 值会是一个 stale state
// useEffect(() => {
//   let id = setInterval(() => {
//     setCount(count + 1)
//   }, 1000)
//   return () => clearInterval(id)
// })

// function createThunkMiddleware(extraArgument) {
//   return ({ dispatch, getState }) => next => action => {
//     if (typeof action === 'function') {
//       return action(dispatch, getState, extraArgument)
//     }

//     return next(action)
//   }
// }

// const thunk = createThunkMiddleware()
// thunk.withExtraArgument = createThunkMiddleware
