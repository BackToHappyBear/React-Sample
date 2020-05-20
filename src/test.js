const { SyncHook } = require('tapable')

class Lesson {
  constructor() {
    this.hooks = {
      arch: new SyncHook(['name']),
    }
  }

  tap() {
    this.hooks.arch.tap('node', function(name) {
      console.log(name)
    })
    this.hooks.arch.tap('react', function(name) {
      console.log(name)
    })
  }

  start() {
    this.hooks.arch.call('from me')
  }
}

// let l = new Lesson()
// l.tap()
// l.start()

class SyncHook2 {
  constructor(args) {
    this.tasks = []
  }

  tap(name, task) {
    this.tasks.push(task)
  }
  call(...args) {
    this.tasks.forEach(task => task(...args))
  }
}

class SyncBailoutHook {
  constructor(args) {
    this.tasks = []
  }

  tap(name, task) {
    this.tasks.push(task)
  }
  call(...args) {
    let ret
    let index = 0
    do {
      ret = this.tasks[index++](...args)
    } while (ret === undefined && index < this.tasks.length)
  }
}

// let hook = new SyncBailoutHook(['name'])
// hook.tap('node', function(name) {
//   console.log('node', name)
//   // NOTE: return undefined 不会中断当前函数执行
//   return undefined
//   // return 'what?'
// })
// hook.tap('react', function(name) {
//   console.log('react', name)
// })
// hook.call('from me')

class SyncWaterfallHook {
  constructor(args) {
    this.tasks = []
  }

  tap(name, task) {
    this.tasks.push(task)
  }
  call(...args) {
    let [first, ...others] = this.tasks
    others.reduce((prev, next) => {
      return next(prev)
    }, first(...args))

    // let ret
    // let index = 0
    // let r = Promise.resolve(...args)
    // for (let i = 0; i < this.tasks.length; i++) {
    //   const task = this.tasks[i]
    //   r.then(ret => task(ret, ...args))
    // }
  }
}

let syncWaterfallHook = new SyncWaterfallHook(['name'])
syncWaterfallHook.tap('node', function(data) {
  console.log('node', data)
  // NOTE: return undefined 不会中断当前函数执行
  return 'node ok'
  // return 'what?'
})
syncWaterfallHook.tap('react', function(data) {
  console.log('react', data)
})
syncWaterfallHook.call('from me')

// NOTE: tabpable 库有三种注册方法 tap tapAsync tapPromise 对应 call callAsync promise

// next
function callAsync(...args) {
  let finalCallback = args.pop()
  let index = 0
  let next = () => {
    if (this.tasks.length === index) return finalCallback()
    let task = this.tasks[index++]
    task(...args, next)
  }
  next()
}

// waterfallHook
function callAsync2(...args) {
  let finalCallback = args.pop()
  let index = 0
  let next = (err, data) => {
    let task = this.tasks[index]
    if (!task) return finalCallback()
    if (index === 0) {
      task(...args, next)
    } else {
      task(data, next)
    }
    index++
  }
  next()
}
