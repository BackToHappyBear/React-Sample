export function throttle(fn, delay, mustRunTime) {
  let timer = null
  let startTime
  return function() {
    const context = this
    const args = arguments
    const currentTime = +new Date()
    clearTimeout(timer)
    if (!startTime) {
      startTime = currentTime
    }
    if (currentTime - startTime >= mustRunTime) {
      fn.apply(context, args)
    } else {
      timer = setTimeout(function() {
        fn.apply(context, args)
      }, delay)
    }
  }
}

export function throttle2(fn) {
  let canRun = true
  return function() {
    if (!canRun) return
    canRun = false
    setTimeout(() => {
      fn.apply(this, arguments)
      canRun = true
    }, 500)
  }
}
