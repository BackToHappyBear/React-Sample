import { useEffect, useRef } from 'react'

export function useInterval(callback: () => void, delay: number) {
  const saveCallback = useRef<() => void | null>()

  useEffect(() => {
    saveCallback.current = callback
  }, [callback])

  useEffect(() => {
    function tick() {
      if (saveCallback && saveCallback.current) {
        saveCallback.current()
      }
    }

    if (delay !== null) {
      const tId = setInterval(tick, delay)
      return clearInterval(tId)
    }
  }, [delay])
}

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
