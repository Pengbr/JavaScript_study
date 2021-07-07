export default class Queue {
    constructor() {
        // 构造函数类似python中初始化函数__init__
        // 注意基于数组和对象的区别，对象中没有索引值，而是键
        // count对应对象的键,而不是对象中元素的个数
        this.count = 0
        // 记录第一个元素
        this.lowestCount = 0
        this.items = {}
    }

    enqueue(element) {
        this.items[this.count] = element
        this.count++
    }

    dequeue() {
        if (this.isEmpty()) {
            return null
        }
        let result = this.items[this.lowestCount]
        delete this.items[this.lowestCount]
        this.lowestCount++
        return result
    }

    peek() {
        if (this.isEmpty()) {
            return null
        }
        return this.items[this.lowestCount]
    }

    isEmpty() {
        return this.count - this.lowestCount === 0
    }

    size() {
        return this.count - this.lowestCount
    }

    clear() {
        // 直接引用构造函数
        this.count = 0
        this.lowestCount = 0
        this.items = {}
    }

    toString() {
        if (this.isEmpty()) {
            return ''
        }
        let objString = this.items[this.lowestCount]
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString += ` ${this.items[i]}`
        }
        return objString
    }
}

// const q = new Queue()
// console.log(q.isEmpty());
//
// q.enqueue('br')
// q.enqueue('rose')
// console.log(q.toString())
//
// q.enqueue('julia')
// console.log(q.toString())
// console.log(q.size())
// console.log(q.isEmpty())
//
// q.dequeue()
// q.dequeue()
// console.log(q.toString())



