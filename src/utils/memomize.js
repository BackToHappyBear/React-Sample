import { isEqual as areInputEqual } from './isEqual'

export function memoize(resultFn, isEqual = areInputEqual) {
  let lastArgs = [] // 用来存放上一次调用的参数
  let lastResult // 用来缓存上一次的结果
  let calledOnce = false // 是否调用过，刚开始的时候是false

  // 判断两次调用的时候的参数是否相等
  // 这里的 `isEqual` 是一个抽象函数，用来判断两个值是否相等
  const isNewArgEqualToLast = (newArg, index) => isEqual(newArg, lastArgs[index])

  // 如果上一次的参数和这一次一样，直接返回上一次的结果
  const result = function(...newArgs) {
    if (calledOnce && newArgs.length === lastArgs.length && newArgs.every(isNewArgEqualToLast)) {
      // 如果和上次的参数一致， 直接返回缓存的值
      return lastResult
    }

    // 如果和上一次的参数不一致，我们需要再次调用原来的函数
    calledOnce = true // 标记为调用过
    lastArgs = newArgs // 重新缓存参数
    lastResult = resultFn.apply(this, newArgs) // 重新缓存返回值

    return lastResult
  }

  // 返回闭包函数
  return result
}

// usage
const add = (a, b) => a + b
const memoizedAdd = memoize(add)

memoizedAdd(1, 2) // 3

memoizedAdd(1, 2) // 3
// Add function is not executed: previous result is returned

memoizedAdd(2, 3) // 5
// Add function is called to get new value

memoizedAdd(2, 3) // 5
// Add function is not executed: previous result is returned

memoizedAdd(1, 2) // 3
// Add function is called to get new value.
// While this was previously cached,
// it is not the latest so the cached result is lost
