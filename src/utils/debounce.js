export function debounce(method, delay, context) {
  clearTimeout(method.tId)
  method.tId = setTimeout(function() {
    method.call(context)
  }, delay)
}

export function debounce2(fn, delay) {
  var timer = null
  return function() {
    var context = this,
      args = arguments
    clearTimeout(timer)
    timer = setTimeout(function() {
      fn.apply(context, args)
    }, delay)
  }
}
