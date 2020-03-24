// Stack 后进先出
class Stack {
  constructor() {
    this.items = []
  }
  push(element) {
    this.items.push(element)
  }
  pop() {
    return this.items.pop()
  }
  peek() {
    return this.items[this.items.length - 1]
  }
  isEmpty() {
    return this.items.length === 0
  }
  clear() {
    this.items = []
  }
  size() {
    return this.items.length
  }
}

function baseConvert(decNumber, base) {
  let stack = new Stack()
  let rem
  let baseString = ''
  let digits = '0123456789ABCDEF'

  while (decNumber > 0) {
    rem = Math.floor(decNumber % base)
    stack.push(rem)
    decNumber = Math.floor(decNumber / base)
  }

  while (!stack.isEmpty()) {
    baseString += digits[stack.pop()]
  }

  return baseString
}

console.log(baseConvert(13, 2))
console.log(baseConvert(13, 16))
