// map forEach every filter some find reduce includes
// fill concat sort reverse slice fliter toString valueOf join indexOf lastIndexOf
// push pop unshift shift splice

// for of / for in
var a = ['A', 'B', 'C']
a.name = 'Hello'
for (var x of a) {
  console.log(x) // 'A', 'B', 'C'
}

for (var y in a) {
  console.log(y) // '0', '1', '2', 'name'
}

console.log(a.hasOwnProperty('name')) // true

// from
console.log(Array.from('foo'))
// expected output: Array ["f", "o", "o"]

console.log(Array.from([1, 2, 3], x => x + x))
// expected output: Array [2, 4, 6]

console.log(Array.from({ 0: 1, length: 1 }))
console.log(Array.prototype.slice.call({ 0: 1, length: 1 }))

// toString join
console.log([1, 2, 3].toString()) // 1,2,3
console.log([1, 2, 3].join('')) // 123
