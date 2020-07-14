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

// add(1)(2)(3) = 6
// add(1, 2, 3)(4) = 10
// add(1)(2)(3)(4)(5) = 15

function add() {
  // 第一次执行时，定义一个数组专门用来存储所有的参数
  var _args = Array.prototype.slice.call(arguments)

  // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
  var _adder = function() {
    _args.push(...arguments)
    return _adder
  }

  // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
  _adder.toString = function() {
    return _args.reduce(function(a, b) {
      return a + b
    })
  }
  return _adder
}

// -------------
// var _ = require("ramda");

// var add = function(a, b, c) {
//     return a, b, c;
// };

// var curry_add = _.curry(add);

// console.log(curry_add(1)); // 输出函数
// console.log(curry_add(1)(2)); // 输出函数
// console.log(curry_add(1)(2)(3)); // 输出结果

var curry2 = function(fn) {
  var limit = fn.length // fn接受的参数个数
  var params = [] // 存储递归过程的所有参数，用于递归出口计算值

  return function _curry(...args) {
    params = params.concat(args) // 收集递归参数
    if (limit <= params.length) {
      // 返回函数执行结果
      return fn.apply(null, params)
    } else {
      // 返回一个柯里化函数
      return _curry
    }
  }
}
