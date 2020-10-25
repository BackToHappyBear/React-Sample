/* eslint-disable no-unused-vars */
class Dictionary {
  constructor() {
    this.items = {}
  }
  set(key, value) {
    this.items[key] = value
  }
  delete(key) {
    if (this.has(key)) {
      delete this.items[key]
      return true
    }
    return false
  }
  has(key) {
    return this.items.hasOwnProperty(key)
  }
  get(key) {
    return this.has(key) ? this.items[key] : undefined
  }
  clear() {
    this.items = {}
  }
  size() {
    return Object.keys(this.items).length
  }
  keys() {
    return Object.keys(this.items)
  }
  values() {
    let values = []
    for (const item of this.items) {
      values.push(item)
    }
    return values
  }
}
