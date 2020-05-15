/* eslint-disable no-unused-vars */
// ✨ flatten array
const arr = [1, [2, [3, [4]]], 5]

function flat(array) {
  return [].concat(...array.map(item => (Array.isArray(item) ? flat(item) : item)))
}
console.log(flat(arr))

const flatten = (array, depth = 1) =>
  array.reduce(
    (ret, item) =>
      ret.concat(Array.isArray(item) && depth > 1 ? flatten(item, depth - 1) : item),
    [],
  )

console.log(flatten(arr, 3))

// ✨throttle
function throttle(fn, delay = 1000 / 60) {
  let lock = false
  return (...args) => {
    if (lock) return
    lock = true
    fn(...args)
    setTimeout(() => {
      lock = false
    }, delay)
  }
}

// ✨ debounce
function debounce(fn, delay = 1000 / 60) {
  let tId = null
  return (...args) => {
    if (tId) {
      clearTimeout(tId)
    }
    tId = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}

// ✨✨ curry
// const foo = curry((a, b, c, d) => return a + b + c + d)
// const f = foo(1)(2)(3)
// f(4)
function curry(fn) {
  const g = (...allArgs) =>
    allArgs.length >= fn.length ? fn(...allArgs) : (...args) => g(...allArgs, ...args)
  return g
}

// ✨✨✨ Y-组合子

// ✨✨✨✨ dom-diff
