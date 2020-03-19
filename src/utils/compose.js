export function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}
// https://juejin.im/post/5b3ce5086fb9a04f89780d83

// function composeOld(...funcs) {
//   if (funcs.length === 0) {
//     return arg => arg
//   }

//   if (funcs.length === 1) {
//     return funcs[0]
//   }
//
//   let last = funcs.pop()
//   return function(...args) {
//     return funcs.reduceRight((a, b) => {
//       return b(a)
//     }, last(...args))
//   }
// }

// export default function compose(...funcs) {
//   return arg => funcs.reduceRight((composed, f) => f(composed), arg)
// }
