/* eslint-disable no-unused-vars */
/* eslint-disable no-extend-native */
function greet(p) {
  const reply = [this.animal, 'typically sleep between', this.sleepDuration].join(' ')
  console.log(reply)
  console.log('p', p)
}

const obj = {
  animal: 'cats',
  sleepDuration: '12 and 16 hours',
}

// greet.call(obj) // cats typically sleep between 12 and 16 hours

// myCall
Function.prototype.myCall = function(context = window, ...args) {
  context.f = this
  const ret = context.f(...args)
  delete context.f
  return ret
}

// greet.myCall(obj)

// myApply
Function.prototype.myApply = function(context = window, args) {
  context.f = this
  const ret = context.f(...args)
  delete context.f
  return ret
}

// myBind   xxx.myBind(context, arg1)(arg2)
Function.prototype.myBind = function(context = window, ...args) {
  return (...rest) => {
    this.call(context, ...args, ...rest)
  }
}

greet.myBind(obj)(1)

// curry sum(100,200)(300)(...)()
function curry(fn, ...rest) {
  return function(...args) {
    if (args.length) {
      return curry(fn, ...rest, ...args)
    }
    return fn(...rest)
  }
}
