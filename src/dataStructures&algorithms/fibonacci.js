function fibonacci1(n) {
  if (n === 1 || n === 2) {
    return 1
  }
  return fibonacci1(n - 1) + fibonacci1(n - 2)
}

// 1 1 2 3 5 8 13 21
console.log(fibonacci1(5))

function fibonacci2(n) {
  let [a, b] = [0, 1]
  for (let i = 1; i < n; i++) {
    ;[a, b] = [b, a + b]
  }
  return b
}
console.log(fibonacci2(5))
