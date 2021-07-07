function BinarySearchTree() {
    this.root = null;

    function Node(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }

    BinarySearchTree.prototype.insert = function (key) {
        let newNode = new Node(key);
        if (this.root == null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }
    //内部方法,树结构经常使用递归
    BinarySearchTree.prototype.insertNode = function (node, newNode) {
        if (newNode.key < node.key) {
            if (node.left == null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right == null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }
    // 树为非线性结构，遍历的方式有多种，如先序、中序、后序遍历等
    BinarySearchTree.prototype.preOrderTraversal = function (handler) {
        this.preOrderTraversalNode(this.root, handler);
    }
    // 内部方法
    BinarySearchTree.prototype.preOrderTraversalNode = function (node, handler) {
        if (node !== null) {
            // 先处理根节点，再处理左子树，最后处理右子树
            handler(node.key);
            this.preOrderTraversalNode(node.left, handler);
            this.preOrderTraversalNode(node.right, handler);
        }
    }
    // 中序遍历
    BinarySearchTree.prototype.midOrderTraversal = function (handler) {
        this.midOrderTraversalNode(this.root, handler);
    }
    BinarySearchTree.prototype.midOrderTraversalNode = function (node, handler) {
        if (node !== null) {
            // 先处理左子树，再处理根节点，最后处理右子树
            this.midOrderTraversalNode(node.left, handler);
            handler(node.key);
            this.midOrderTraversalNode(node.right, handler);
        }
    }
    // 后序遍历
    BinarySearchTree.prototype.postOrderTraversal = function (handler) {
        this.postOrderTraversalNode(this.root, handler);
    }
    BinarySearchTree.prototype.postOrderTraversalNode = function (node, handler) {
        if (node !== null) {
            this.postOrderTraversalNode(node.left, handler);
            this.postOrderTraversalNode(node.right, handler);
            handler(node.key);
        }
    }
    // 寻找最值
    BinarySearchTree.prototype.max = function () {
        let node = this.root;
        while (node.right !== null) {
            node = node.right;
        }
        return node.key;
    }
    // 寻找最小值
    BinarySearchTree.prototype.min = function () {
        let node = this.root;
        while (node.left !== null) {
            node = node.left;
        }
        return node.key;
    }
    BinarySearchTree.prototype.search = function (key) {
        let node = this.root;
        while (node !== null) {
            if (key < node.key) {
                node = node.left;
            } else if (key > node.key) {
                node = node.right;
            } else {
                return true;
            }
        }
        return false;
    }
}

let bst = new BinarySearchTree();
// bst.insert(11);
// bst.insert(7);
// bst.insert(15);
// bst.insert(5);
// bst.insert(3);
// bst.insert(9);
// bst.insert(8);
// bst.insert(10);
// bst.insert(13);
// bst.insert(12);
// bst.insert(14);
// bst.insert(20);
// bst.insert(18);
// bst.insert(25);
