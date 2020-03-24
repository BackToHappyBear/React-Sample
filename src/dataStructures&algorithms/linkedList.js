// LinkedList 链表
// 常用数据结构数组从插入、移除项的成本很高，因为需要移除元素
class Node {
  constructor(element) {
    this.elemement = element
    this.next = null
  }
}

class LinkedList {
  constructor(item) {
    const flag = item || item === 0
    this.head = flag ? new Node(item) : null
    this.length = flag ? 1 : 0
  }

  append(item) {
    let node = new Node(item)
    let current

    if (this.head === null) {
      this.head = current
    } else {
      current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = node
    }

    this.length++
  }

  insert(position, item) {
    if (position >= 0 && position <= this.length) {
      let node = new Node(item)
      let current = this.head
      let index = 0
      let previous

      if (position === 0) {
        node.next = this.head
        this.head = node
      } else {
        while (index < position) {
          previous = current
          current = current.next
          index++
        }
        previous.next = node
        node.next = current
      }
      this.length++
      return true
    }
    return false
  }

  removeAt(position) {
    if (position >= 0 && position <= this.length) {
      let current = this.head
      let previous
      let index = 0
      if (position === 0) {
        this.head = current.next
      } else {
        while (index < position) {
          previous = current
          current = current.next
          index++
        }
        previous.next = current.next
        this.length--
      }
      return current.elemement
    }
  }

  remove(element) {}

  indexOf(element) {
    let current = this.head
    let index = 0
    while (current) {
      if (current.elemement === element) {
        return index
      }
      current = current.next
      index++
    }
    return -1
  }

  isEmpty() {
    return this.length === 0
  }

  size() {
    return this.length
  }

  getHead() {
    return this.head
  }

  toString() {
    let current = this.head
    let string = ''
    while (current) {
      string += current.element + (current.next ? 'n' : '')
      current = current.next
    }
    return string
  }

  print() {}
}

const linkList = new LinkedList(1)
// linkList.insert(1, 1)
// console.log(linkList.head)
// console.log(linkList.head.next)
console.log('ret', linkList.toString())
