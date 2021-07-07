// 节点类
class Node {
    constructor(key) {
        // 节点的值及指向
        this.key = key
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        // 根节点的引用
        this.root = null
    }

    // 插入数据，根据key值来插入
    insert(key) {
        // 根据key创建节点
        const newNode = new Node(key)
        // 判断根节点是否有值
        if (this.root === null) {
            this.root = newNode
        } else {
            this._insertNode(this.root, newNode)
        }
    }

    // 插入递归函数
    _insertNode(node, newNode) {
        if (newNode.key < node.key) {
            // 向左查找
            if (node.left === null) {
                node.left = newNode
            } else {
                this._insertNode(node.left, newNode)
            }
        } else {
            // 向右查找
            if (node.right === null) {
                node.right = newNode
            } else {
                this._insertNode(node.right, newNode)
            }
        }
    }

    // 先序遍历
    preOrderTraversal(handler) {
        this._preOrderTraversalNode(this.root, handler)
    }

    _preOrderTraversalNode(node, handler) {
        if (node != null) {
            handler(node.key)
            this._preOrderTraversalNode(node.left, handler)
            this._preOrderTraversalNode(node.right, handler)
        }
    }

    // 寻找最值
    max() {
        let node = this.root
        while (node.right != null) {
            node = node.right
        }
        return node.key
    }

    min() {
        let node = this.root
        while (node.left != null) {
            node = node.left
        }
        return node.key
    }

    // 搜索某一个key
    search(key) {
        let node = this.root
        while (node != null) {
            if (key < node.key) {
                node = node.left
            } else if (key > node.key) {
                node = node.right
            } else {
                return true
            }
        }
        return false
    }

    remove(key) {
        let current = this.root
        let parent = null
        let isLeftChild = true
        while (current.key !== key) {
            parent = current
            if (key < current.key) {
                isLeftChild = true
                current = current.left
            } else {
                isLeftChild = false
                current = current.right
            }
            if (current === null) return false
        }
        // 删除的节点是叶子节点
        if (current.left === null && current.right === null) {
            if (current === this.root) {
                this.root = null
            } else if (isLeftChild) {
                parent.left = null
            } else {
                parent.right = null
            }
        }
        // 删除的节点有一个子节点
        else if (current.right === null) {
            if (current === this.root) {
                this.root = current.left
            } else if (isLeftChild) {
                parent.left = current.left
            } else {
                parent.right = current.left
            }
        } else if (current.left === null) {
            if (current === this.root) {
                this.root = current.right
            } else if (isLeftChild) {
                parent.left = current.right
            } else {
                parent.right = current.right
            }
        }
    }

}


let bst = new BinarySearchTree()
bst.insert(11)
bst.insert(7)
bst.insert(15)
bst.insert(5)
bst.insert(3)
bst.insert(9)
bst.insert(8)
bst.insert(10)
bst.insert(13)
bst.insert(12)
bst.insert(14)
bst.insert(20)
bst.insert(18)
bst.insert(25)

let resultString = ''
bst.preOrderTraversal((key) => {
    resultString += key + ' '
    console.log(resultString)
})
