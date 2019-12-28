export function throttle(fn, delay) {
  var flag = false
  return function() {
    if (flag) return
    flag = true
    setTimeout(() => {
      fn()
      flag = false
    }, delay)
  }
}

export function throttle2(fn, delay, mustRunTime) {
  let timer = null
  let previousTime = null
  return function() {
    let now = +Date.now()
    if (!previousTime) {
      previousTime = now
    }
    if (now > previousTime + mustRunTime) {
      fn()
      previousTime = now
      clearTimeout(timer)
    } else {
      clearTimeout(timer)
      timer = setTimeout(() => {
        fn()
        previousTime = null
      }, delay)
    }
  }
}
