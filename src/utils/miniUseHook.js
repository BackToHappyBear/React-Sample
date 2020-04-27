/* eslint-disable no-unused-vars */
let memoizedState = []
let cursor = 0

function useState(initialValue) {
  memoizedState[cursor] = memoizedState[cursor] || initialValue
  const currentCursor = cursor
  function setState(newState) {
    memoizedState[currentCursor] = newState
    // render()
  }
  return [memoizedState[cursor++], setState]
}

function useEffect(callback, deps) {
  const hasNoDeps = !deps
  const hasChangedDeps = memoizedState[cursor]
    ? memoizedState[cursor].every((v, i) => v === deps[i])
    : true
  if (hasNoDeps || hasChangedDeps) {
    callback()
    memoizedState[cursor] = deps
  }
  cursor++
}
