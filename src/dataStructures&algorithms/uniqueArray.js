const array = [1, 2, 3, 4, 3, 2]

// Set
const ret1 = [...new Set(array)]

// filter indexOf
const ret2 = array.filter((v, i) => array.indexOf(v) === i)

// reduce
const ret3 = array.reduce((unique, item) => {
  return unique.includes(item) ? unique : [...unique, item]
}, [])

// HashMap
const ret4 = function(arr) {
  const hashMap = {}
  let ret = []
  arr.forEach(v => {
    if (!hashMap[v]) {
      hashMap[v] = true
      ret.push(v)
    }
  })
  return ret
}

console.log(ret1, ret2, ret3, ret4(array))
