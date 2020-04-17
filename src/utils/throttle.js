export function throttle(fn, delay) {
  var flag = false
  return function(...args) {
    if (flag) return
    flag = true
    setTimeout(() => {
      fn(...args)
      flag = false
    }, delay)
  }
}

export function throttle2(fn, delay) {
  let previousTime = null
  return function() {
    let now = +Date.now()
    if (!previousTime) {
      previousTime = now
    }
    if (now - previousTime > delay) {
      fn()
      previousTime = now
    }
  }
}
