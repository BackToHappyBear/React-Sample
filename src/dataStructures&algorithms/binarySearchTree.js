function BinarySearchTree() {
  const Node = function(key) {
    this.key = key
    this.left = null
    this.right = null
  }

  var root = null

  // 插入
  this.insert = function(key) {
    const newNode = new Node(key)
    if (!root) {
      root = newNode
    } else {
      insertNode(root, newNode)
    }
  }

  function insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) {
        node.left = newNode
      } else {
        insertNode(node.left, newNode)
      }
    } else {
      if (node.right === null) {
        node.right = newNode
      } else {
        insertNode(node.right, newNode)
      }
    }
  }

  this.remove = function(element) {
    root = removeNode(root, element)
  }

  // 移除
  function removeNode(node, element) {
    if (!node) return null

    if (element < node.key) {
      node.left = removeNode(node.left, element)
      return node
    } else if (element > node.key) {
      node.right = removeNode(node.right, element)
      return node
    } else {
      // 1、a leaf node
      if (!node.left && !node.right) {
        node = null
        return node
      }

      // 2、a node with only one child
      if (!node.left) {
        node = node.left
        return node
      } else if (!node.right) {
        node = node.right
        return node
      }

      // 3、a node with two children
      var aux = findMinNode(node.right)
      node.key = aux.key
      node.right = removeNode(node.right, aux.key)
      return node
    }
  }

  // 最小值
  this.min = function() {
    return findMinNode(root)
  }

  function findMinNode(node) {
    if (!node) return null

    while (node.left) {
      node = node.left
    }
    return node
  }

  // 最大值
  this.max = function() {
    return findMaxNode(root)
  }

  function findMaxNode(node) {
    if (!node) return null

    while (node.right) {
      node = node.right
    }
    return node
  }

  // 搜索值
  this.search = function(key) {
    return searchNode(root, key)
  }

  function searchNode(node, key) {
    if (!node) return false
    if (key < node.key) {
      return searchNode(node.left, key)
    } else if (key > node.key) {
      return searchNode(node.right, key)
    } else {
      return true
    }
  }

  // 中序遍历(按大小顺序遍历) 从最小到最大 应用：排序操作
  this.inOrderTraverse = function(callback) {
    inOrderTraverseNode(root, callback)
  }

  function inOrderTraverseNode(node, callback) {
    if (node !== null) {
      inOrderTraverseNode(node.left, callback)
      callback(node.key)
      inOrderTraverseNode(node.right, callback)
    }
  }

  // 先序遍历 应用：结构化文档
  this.prevOrderTraverse = function(callback) {
    prevOrderTraverse(root, callback)
  }

  function prevOrderTraverse(node, callback) {
    if (node !== null) {
      callback(node.key)
      prevOrderTraverse(node.left)
      prevOrderTraverse(node.right)
    }
  }

  // 后序遍历 先访问节点的后代节点再访问本身 应用：计算一个目录和他的子目录中所有文件所占空间大小
  this.postOrderTraverse = function(callback) {
    postOrderTraverseNode(root, callback)
  }

  function postOrderTraverseNode(node, callback) {
    if (node !== null) {
      postOrderTraverseNode(node.left, callback)
      postOrderTraverseNode(node.right, callback)
      callback(node.key)
    }
  }
}
