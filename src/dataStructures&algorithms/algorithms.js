/* eslint-disable no-unused-vars */
// 斐波那契
function fibonacci(num) {
  if (num === 1 || num === 2) {
    return 1
  }
  return fibonacci(num - 1) + fibonacci(num - 2)
}

function fib(num) {
  var n1 = 1
  var n2 = 2
  var ret = 0
  for (var i = 3; i <= num; i++) {
    ret = n1 + n2
    n1 = n2
    n2 = ret
  }
  return ret
}

// DP Dynamic Programming：将复杂问题分解成更小的子问题解决的优化结束
// 动态规划 & 分而治之
// 前者把问题分解为相互独立的子问题，后者将问题分解为相互依赖的子问题
function MinCoinChange(coins) {
  var cache = {}

  this.makeChange = function(amount) {
    var me = this
    if (!amount) {
      return []
    }
    if (cache[amount]) {
      return cache[amount]
    }
    var min = [],
      newMin,
      newAmount
    for (var i = 0; i < coins.length; i++) {
      var coin = coins[i]
      newAmount = amount - coin
      if (newAmount >= 0) {
        newMin = me.makeChange(newAmount)
      }
      if (
        newAmount >= 0 &&
        (newMin.length < min.length - 1 || !min.length) &&
        (newMin.length || !newAmount)
      ) {
        min = [coin].concat(newMin)
        console.log('new Min ' + min + ' for ' + amount)
      }
    }
    return (cache[amount] = min)
  }
}

var minCoinChange = new MinCoinChange([1, 5, 10, 25])
console.log(minCoinChange.makeChange(36))

var minCoinChange2 = new MinCoinChange([1, 3, 4])
console.log(minCoinChange2.makeChange(6))
