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
    // 确保 fn 的 this 指向，如 dom 元素
    // var context = this,
    var args = arguments
    clearTimeout(timer)
    timer = setTimeout(function() {
      fn(...args)
      // fn.apply(context, args)
    }, delay)
  }
}
