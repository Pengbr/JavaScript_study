class Set {
    constructor() {
        // JS中不允许一个键指向两个不同的属性，保证了集合中元素的唯一性
        this.items = {}
    }

    has(element) {
        // in在对象中是属性值，在数组中是索引
        return element in this.items
    }

    add(element) {
        if (!this.has(element)) {
            // 基于对象的数据结构，我们可以让键值一样,让值代表键
            this.items[element] = element
            return true
        }
        return false
    }

    delete(element) {
        if (this.has(element)) {
            delete this.items[element]
            return true
        }
        return false
    }

    clear() {
        // 一般clear方法都可以直接使用构造函数中的内容
        this.items = {}
    }

    size() {
        // Object对象含有keys和values方法
        return Object.keys(this.items).length
    }

    value() {
        // 返回的是一个数组
        return Object.values(this.items)
    }

    // 并集
    union(otherSet) {
        /* const newSet = new Set()
         for (let i = 0; i < this.value().length; i++) {
             newSet.add(this.value()[i])
         }
         for (let j = 0; j < otherSet.value().length; j++) {
             newSet.add(otherSet.value()[j])
         }
         return newSet*/

        const newSet = new Set()
        this.value().forEach((value) => {
            newSet.add(value)
        })
        otherSet.value().forEach((value) => {
            newSet.add(value)
        })
        return newSet
    }

    // 交集
    interSection(otherSet) {
        /*const newSet = new Set()
        for (let i = 0; i < this.value().length; i++) {
            if (otherSet.has(this.value()[i])) {
                newSet.add(this.value()[i])
            }
        }
        return newSet*/

        const newSet = new Set()
        this.value().forEach(value => {
            if (otherSet.has(value)) {
                newSet.add(value)
            }
        })
        return newSet
    }

    // 差集
    difference(otherSet) {
        /*const newSet = new Set()
        for (let i = 0; i < this.value().length; i++) {
            if (!otherSet.has(this.value()[i])) {
                newSet.add(this.value()[i])
            }
        }
        return newSet*/

        const newSet = new Set()
        this.value().forEach(value => {
            if (!otherSet.has(value)) {
                newSet.add(value)
            }
        })
        return newSet
    }

    // 子集
    isSubsetOf(otherSet) {
        /*for (let i = 0; i < this.value().length; i++) {
            if (!otherSet.has(this.value()[i])) {
                return false
            }
        }
        return true*/

        this.value().forEach(value => {
            if (!otherSet.has(value)) {
                return false
            }
        })
        return true
    }
}

const setA = new Set()
setA.add(1)
setA.add(2)
setA.add(3)
// setA.add(4)

const setB = new Set()
setB.add(1)
setB.add(2)
setB.add(3)
setB.add(4)
setB.add(5)

// console.log(setA.union(setB))
console.log(setA.difference(setB))
console.log(setA.isSubsetOf(setB))
console.log(setA.union(setB))

