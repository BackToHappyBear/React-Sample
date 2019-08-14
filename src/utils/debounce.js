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
    // var context = this,
    var args = arguments
    // console.log('this', 'window')
    clearTimeout(timer)
    timer = setTimeout(function() {
      fn(...args)
      // fn.apply(context, args)
    }, delay)
  }
}
