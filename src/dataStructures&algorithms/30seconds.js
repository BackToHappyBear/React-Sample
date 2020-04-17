/* eslint-disable no-unused-vars */
/* eslint-disable no-use-before-define */
// TITLE: pipeAsyncFunctions
const sum = pipeAsyncFunctions(
  x => x + 1,
  x => new Promise(resolve => setTimeout(() => resolve(x + 2), 1000)),
  x => x + 3,
  async x => (await x) + 4,
)
;(async () => {
  console.log(await sum(5)) // 15 (after one second)
})()

const pipeAsyncFunctions = (...fns) => args => {
  return fns.reduce((p, f) => {
    return p.then(f)
  }, Promise.resolve(args))
}

// TITLE: pipeFunctions
const add5 = x => x + 5
const multiply = (x, y) => x * y
const multiplyAndAdd5 = pipeFunctions(multiply, add5)
multiplyAndAdd5(5, 2) // 15

const pipeFunctions = (...fns) => (...args) => fns.reduce((p, n) => n(p(...args)))

// TITLE: composeRight  compose(fn1, fn2, fn3)  fn1(fn2(fn3(args)))
const composeRight1 = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)))
const compseRight2 = (...fns) => (...args) => fns.reduceRight((f, g) => g(f(...args)))
