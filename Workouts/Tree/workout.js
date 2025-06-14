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
        return this.root === null
    }

    insert(value) {
        let newNode = new Node(value)
        if (this.isEmpty()) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode)
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
                root.right = newNode;
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }

    search(root, value) {
        if (!root) return false;
        else if (root.value == value) {
            return true;
        } else if (value < root.value) {
            return this.search(root.left, value)
        } else {
            return this.search(root.right, value)
        }
    }

    preOrder(root) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        }
    }

    inOrder(root) {
        if (root) {
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }

    postOrder(root) {
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);
        }
    }

    levelOrder() {
        const queue = [this.root];
        while (queue.length) {
            let current = queue.shift();
            console.log(current.value);
            if (current.left) {
                queue.push(current.left)
            }
            if (current.right) {
                queue.push(current.right)
            }
        }
    }

    countNodes(root) {
        if (!root) {
            return 0;
        } else {
            return 1 + this.countNodes(root.left) + this.countNodes(root.right)
        }
    }

    countRighttNodes(root) {
        if (root) {
            return this.countNodes(root.right)
        }
    }

    height(root) {
        if (!root) return -1

        let leftHeight = this.height(root.left)
        let rightHeight = this.height(root.right)

        return Math.max(leftHeight, rightHeight) + 1

    }

    findClosest(root, target) {
        let closest = root.value;
        while (root) {
            if (Math.abs(target - root.value) < Math.abs(target - closest)) {
                closest = root.value
            }
            if (target < root.value) {
                root = root.left
            } else if (target > root.value) {
                root = root.right
            } else break
        }
        return closest
    }

    kthSmallest(root, k) {
        let result = [];
        function inOrder(root) {
            if (root == null) return;
            inOrder(root.left);
            result.push(root.value);
            inOrder(root.right);
        }
        inOrder(root)
        return result[k - 1]
    }


    countLeaf(root) {
        if (!root) return 0;
        if (!root.left && !root.right) {
            return 1
        }

        return this.countLeaf(root.left) + this.countLeaf(root.right)
    }

    isBST(root, min = -Infinity, max = Infinity) {
        if (!root) return true;

        if (root.val <= min || root.val >= max) return false;

        return this.isBST(root.left, min, root.value) &&
            this.isBST(root.right, root.value, max)

    }

    same(p, q) {
        if (!p && !q) return true;
        if (!p || !q) return false;

        if (p.val !== q.val) {
            return false;

        }
        return this.same(p.left, q.left) && this.same(p.right, q.right)

    }

    min(root) {
        if (!root.left) {
            return root.value
        } else {
            return this.min(root.left)
        }
    }

    delete(root, value) {
        this.root = this.deleteNode(this.root, value)
    }
    deleteNode(root, value) {
        if (root == null) return root;
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value)
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value)
        } else {
            if (!root.left && !root.right) return null;

            if (!root.left) return root.right;
            else if (!root.right) return root.left;

            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right, root.value)
        }
        return root;
    }

    findLCA(root, n1, n2) {
        if (!root) return null;

        if (n1 < root.value && n2 < root.value) {
            return this.findLCA(root.left, n1, n2)
        }
        if (n1 > root.value && n2 > root.value) {
            return this.findLCA(root.right, n1, n2)
        }

        return root;
    }

    findDistanceFromNode(root, val) {
        let distance = 0;
        while (root.value !== val) {
            if (val < root.value) root = root.left;
            else root = root.right;
            distance++;
        }
        return distance;
    }

    findDistanceBetweenNodes(n1, n2) {
        const lca = this.findLCA(this.root, n1, n2);
        const d1 = this.findDistanceFromNode(lca, n1);
        const d2 = this.findDistanceFromNode(lca, n2);
        return d1 + d2;
    }

    countInternal(root) {
    if (!root || (!root.left && !root.right)) return 0;

    return 1 + this.countInternal(root.left) + this.countInternal(root.right);
}




}

const b = new BST()

b.insert(15)
b.insert(20)
b.insert(10)
b.insert(25)
b.insert(5)
b.insert(30)
b.insert(35)

// console.log(b.search(b.root, 20));

// b.levelOrder()

// console.log(b.height(b.root));

// console.log(b.findClosest(b.root, 30));

// console.log(b.kthSmallest(b.root, 3));

console.log(b.isBST(b.root));





