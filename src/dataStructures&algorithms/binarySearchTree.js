function BinarySearchTree() {
  const Node = function(key) {
    this.key = key
    this.left = null
    this.right = null
  }

  this.root = null

  this.insert = function(key) {
    const newNode = new Node(key)
    if (!this.root) {
      this.root = newNode
    } else {
      insertNode(this.root, newNode)
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
}
