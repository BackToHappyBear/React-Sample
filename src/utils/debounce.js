export function debounce(method, delay, context, ...rest) {
  clearTimeout(method.tId)
  method.tId = setTimeout(function() {
    console.log(rest)
    method.apply(context, rest)
  }, delay)
}

export function debounce2(fn, delay) {
  var timer = null
  return function() {
    var args = arguments
    clearTimeout(timer)
    timer = setTimeout(function() {
      fn.apply(this, args)
    }, delay)
  }
}
