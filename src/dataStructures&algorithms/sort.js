/* eslint-disable no-unused-vars */
function ArrayList() {
  var array = []

  var swap = function (index1, index2) {
    ;[array[index1], array[index2]] = [array[index2], array[index1]]
  }

  this.insert = function (item) {
    array.push(item)
  }

  this.toString = function () {
    return array.toString()
  }
  this.array = function () {
    return array
  }

  // O(n^2)
  this.bubbleSort = function () {
    let length = array.length
    for (let i = 0; i < length - 1; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
          swap(array, j, j + 1)
        }
      }
    }
  }

  // O(n^2)
  this.selectionSort = function () {
    let length = array.length
    let indexMin

    for (let i = 0; i < length; i++) {
      indexMin = i
      for (let j = i; j < length; j++) {
        if (array[indexMin] > array[j]) {
          indexMin = j
        }
      }
      if (indexMin !== i) {
        swap(i, indexMin)
      }
    }
  }

  this.insertionSort = function () {}

  // Firefox sort 方法 O(nlog^n)
  this.mergSort = function () {}

  // Chrome sort 方法 O(nlog^n)
  this.quickSort = function () {
    quick(array, 0, array.length)
  }

  function quick(array, left, right) {
    var index
    if (array.length > 1) {
      index = partition(array, left, right)

      if (left < index - 1) {
        quick(array, left, index - 1)
      }
      if (index < right) {
        quick(array, index, right)
      }
    }
  }

  function partition(array, left, right) {
    var pivot = array[Math.floor((left + right) / 2)]
    var i = left
    var j = right

    while (i <= j) {
      while (array[i] < pivot) {
        i++
      }
      while (array[j] > pivot) {
        j--
      }
      if (i <= j) {
        swap(i, j)
        i++
        j--
      }
    }
    return i
  }

  // 二分搜索
  this.binarySearch = function (item) {
    this.quickSort()

    var low = 0
    var high = array.length - 1
    var mid
    var element

    while (low < high) {
      mid = (low + high) / 2
      element = array[mid]
      if (item < element) {
        high = mid - 1
      } else if (item > element) {
        low = mid + 1
      } else {
        return mid
      }
    }
    return -1
  }
}
