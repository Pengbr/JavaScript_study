class Node {
    constructor(element) {
        // 节点类，需要一个元素和指向下一个节点的指针
        this.element = element
        this.next = undefined
    }
}

class LinkedList {
    constructor() {
        // count记录链表中元素的个数
        this.count = 0
        this.head = undefined
    }

    push(element) {
        const node = new Node(element)
        // 设置当前元素
        let current
        // 当链表为空时
        if (this.count === 0) {
            this.head = node
        } else {
            //    当链表不为空时
            current = this.head
            while (current.next !== undefined) {
                current = current.next
            }
            current.next = node
        }
        this.count++
    }

    // removeAt(index) {
    //     // 越界检查
    //     if (index >= 0 && index < this.count) {
    //         let current = this.head
    //         if (index === 0) {
    //             this.head = current.next
    //         } else {
    //             let previous
    //             for (let i = 0; i < index; i++) {
    //                 previous = current
    //                 current = current.next
    //             }
    //             previous.next = current.next
    //         }
    //         this.count--
    //         return current.element
    //     }
    //     return undefined
    // }

    // 封装获取目标位置节点对象的方法
    getElementAt(index) {
        // 越界检查
        // 注意这里的current代表的是node
        if (index >= 0 && index < this.count) {
            let current = this.head
            for (let i = 0; i < index; i++) {
                current = current.next
            }
            return current
        }
        return undefined
    }

    remove(index) {
        let current = this.head
        if (index === 0) {
            this.head = current.next
        } else {
            let previous = this.getElementAt(index - 1)
            current = previous.next
            previous.next = current.next
        }
        this.count--
    }

    insert(element, index) {
        if (index >= 0 && index <= this.count) {
            const node = new Node(element)
            let current = this.head
            if (index === 0) {
                node.next = current
                this.head = node
            } else {
                let previous = this.getElementAt(index - 1)
                current = previous.next
                previous.next = node
                node.next = current
            }
            this.count++
        }
        return false
    }

    indexOf(element) {
        let current = this.head
        for (let i = 0; i < this.count; i++) {
            if (element === current.element) {
                return i
            }
            current = current.next
        }
        return -1
    }

    isEmpty() {
        return this.count === 0
    }

    size() {
        return this.count
    }

    getHead() {
        return this.head
    }

    toString() {
        if (this.head === undefined) {
            return ''
        } else {
            let current = this.head
            let objString = `${current.element}`
            for (let i = 0; i < this.count; i++) {
                current = current.next
                objString += ` ${current.element}`
            }
            return objString
        }
    }
}
