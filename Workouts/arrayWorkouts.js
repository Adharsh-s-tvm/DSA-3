class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root == null;
  }

  insert(value) {
    let newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (!root.left) {
        root.left = newNode
      } else {
        this.insertNode(root.left, newNode)
      }
    } else {
      if (!root.right) {
        root.right = newNode
      } else {
        this.insertNode(root.right, newNode)
      }
    }
  }

  search(root, value) {
    if (!root) return null;
    if (root.value == value) {
      return true;
    } else {
      if (value < root.value) {
        return this.search(root.left, value)
      } else {
        return this.search(root.right, value)
      }
    }
  }

  min(root) {
    if (!root) return null;
    if (!root.left) {
      return root.value
    } else {
      return this.min(root.left)
    }
  }

  delete(value) {
    this.root = this.deleteNode(this.root, value)
  }

  deleteNode(root, value) {
    if (!root) return null;
    if (value < root.value) {
      root.left = this.deleteNode(root.left, value)
    } else if (value > root.value) {
      root.right = this.deleteNode(root.right, value)
    } else {
      if (!root.left && !root.right) return null;
      if (!root.left) return root.right;
      if (!root.right) return root.left;

      root.value = this.min(root.right);
      root.right = this.deleteNode(root.right, root.value)
    }
    return root;
  }

}


const b = new BST();


b.insert(50)
b.insert(30)
b.insert(20)
b.insert(40)
b.insert(70)
b.insert(60)
b.insert(80)



b.search(80)































