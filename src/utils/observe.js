// eslint-disable-next-line no-unused-vars
let person = new Person({
  el: '#app',
  data: {
    name: 'lee',
    score: {
      math: 100,
    },
  },
})

function Person(options) {
  let data = (this.data = options.data)
  observe(data)
  // 数据劫持
  for (const key in data) {
    Object.defineProperties(data, key, {
      enumerable: true,
      get() {
        return this.data[key]
      },
      set(newVal) {
        this.data[key] = newVal
      },
    })
  }
}

function Observe(data) {
  for (const key in data) {
    let val = data[key]
    observe(val)
    Object.defineProperties(data, key, {
      enumerable: true,
      get() {
        return val
      },
      set(newVal) {
        if (val === newVal) {
          return
        }
        val = newVal
        observe(newVal)
      },
    })
  }
}

function observe() {
  return new Observe()
}
