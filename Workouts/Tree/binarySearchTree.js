class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this._insertNode(this.root, newNode);
        }
    }

    _insertNode(root, newNode) {
        if (newNode.value < root.value) {
            if (!root.left) {
                root.left = newNode;
            } else {
                this._insertNode(root.left, newNode);
            }
        } else {
            if (!root.right) {
                root.right = newNode;
            } else {
                this._insertNode(root.right, newNode);
            }
        }
    }

    search(root, value) {
        if (!root) return false;
        if (root.value === value) return true;
        return value < root.value 
            ? this.search(root.left, value) 
            : this.search(root.right, value);
    }

    // DFS Traversals
    preOrder(root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    inOrder(root) {
        if (root) {
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        }
    }

    postOrder(root) {
        if (root) {
            this.postOrder(root.left);
            this.postOrder(root.right);
            console.log(root.value);
        }
    }

    // BFS Traversal
    levelOrder() {
        const queue = [this.root];
        while (queue.length) {
            const current = queue.shift();
            console.log(current.value);
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
    }

    // Min/Max
    min(root) {
        if (!root.left) return root.value;
        return this.min(root.left);
    }

    max(root) {
        if (!root.right) return root.value;
        return this.max(root.right);
    }

    // Delete a node
    delete(value) {
        this.root = this._deleteNode(this.root, value);
    }

    _deleteNode(root, value) {
        if (!root) return null;

        if (value < root.value) {
            root.left = this._deleteNode(root.left, value);
        } else if (value > root.value) {
            root.right = this._deleteNode(root.right, value);
        } else {
            if (!root.left && !root.right) return null;
            if (!root.left) return root.right;
            if (!root.right) return root.left;

            root.value = this.min(root.right);
            root.right = this._deleteNode(root.right, root.value);
        }

        return root;
    }

    // Count nodes
    countNodes(root) {
        if (!root) return 0;
        return 1 + this.countNodes(root.left) + this.countNodes(root.right);
    }

    countLeftNodes(root) {
        if (!root || !root.left) return 0;
        return this.countNodes(root.left);
    }

    countRightNodes(root) {
        if (!root || !root.right) return 0;
        return this.countNodes(root.right);
    }

    countLeafNodes(root) {
        if (!root) return 0;
        if (!root.left && !root.right) return 1;
        return this.countLeafNodes(root.left) + this.countLeafNodes(root.right);
    }

    // Tree height
    height(root) {
        if (!root) return -1;
        return Math.max(this.height(root.left), this.height(root.right)) + 1;
    }

    // Closest value to target
    findClosest(root, target) {
        let closest = root.value;
        while (root) {
            if (Math.abs(target - root.value) < Math.abs(target - closest)) {
                closest = root.value;
            }
            root = target < root.value ? root.left : root.right;
        }
        return closest;
    }

    // Kth smallest value
    kthSmallest(root, k) {
        let count = 0, result = null;

        const inOrder = (node) => {
            if (!node || result !== null) return;
            inOrder(node.left);
            count++;
            if (count === k) result = node.value;
            inOrder(node.right);
        };

        inOrder(root);
        return result;
    }

    // Check if valid BST
    isBST(root, min = -Infinity, max = Infinity) {
        if (!root) return true;
        if (root.value <= min || root.value >= max) return false;
        return this.isBST(root.left, min, root.value) && this.isBST(root.right, root.value, max);
    }

    // Compare two trees
    isSameTree(p, q) {
        if (!p && !q) return true;
        if (!p || !q || p.value !== q.value) return false;
        return this.isSameTree(p.left, q.left) && this.isSameTree(p.right, q.right);
    }
}

// Example usage
const bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(7);
bst.insert(3);

// bst.inOrder(bst.root);
// console.log(bst.search(bst.root, 7));
// console.log(bst.countNodes(bst.root));
// console.log(bst.countLeafNodes(bst.root));
// console.log(bst.kthSmallest(bst.root, 3));
// console.log(bst.height(bst.root));
// console.log(bst.findClosest(bst.root, 9));
// bst.delete(5); bst.inOrder(bst.root);
// console.log(bst.isBST(bst.root));
