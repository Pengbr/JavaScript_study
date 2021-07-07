class Stack {
    constructor() {
        // count属性类似数组里面的length
        this.count = 0
        // 对象是由键值对所组成
        this.items = {}
    }

    push(element) {
        this.items[this.count] = element
        this.count++
    }

    isEmpty() {
        return this.count === 0
    }

    size() {
        return this.count
    }

    pop() {
        if (this.isEmpty()) {
            return undefined
        }
        const result = this.items[this.count]
        delete this.items[this.count]
        this.count--
        return result
    }

    peek() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.count - 1]
    }

    clear() {
        this.count = 0
        this.items = {}
    }

    toString() {
        if (this.isEmpty()) {
            return ''
        }
        let objString = ''
        for (let i = 0; i < this.count; i++) {
            objString += `${this.items[i]}`
        }
        return objString
    }
}
