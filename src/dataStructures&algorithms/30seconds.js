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

// TITLE: dig
const dig = (obj, target) => {
  for (const key in obj) {
    if (key === target) {
      return obj[key]
    } else {
      if (typeof obj[key] === 'object') {
        return dig(obj[key], target)
      }
    }
  }
}

const dig2 = (obj, target) =>
  target in obj
    ? obj[target]
    : Object.values(obj).reduce((acc, val) => {
        if (acc !== undefined) return acc
        if (typeof val === 'object') return dig2(val, target)
      })

const data = {
  level1: {
    level2: {
      level3: 'some data',
    },
  },
}
dig(data, 'level3') // 'some data'
dig(data, 'level4') // undefined

// TITLE: parseCookie
// parseCookie('foo=bar; equation=E%3Dmc%5E2'); // { foo: 'bar', equation: 'E=mc^2' }
const parseCookie = str =>
  str
    .split(';')
    .map(v => v.split('='))
    .reduce((acc, v) => {
      acc[decodeURIComponent(v[0].trim)] = decodeURIComponent(v[1].trim)
      return acc
    }, {})

// TITLE: get
// const obj = { selector: { to: { val: 'val to select' } }, target: [1, 2, { a: 'test' }] };
// get(obj, 'selector.to.val', 'target[0]', 'target[2].a'); // ['val to select', 1, 'test']
const get = (from, ...selectors) =>
  [...selectors].map(s =>
    s
      .replace(/\[([^[\]]*)\]/g, '.$1.')
      .split('.')
      .filter(t => t !== '')
      .reduce((prev, cur) => prev && prev[cur], from),
  )
