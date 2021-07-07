class Array {
    // 构造函数初始化
    constructor(arr) {
        this.arr = arr
    }

    // 向数组末尾添加元素
    push(num) {
        this.arr[this.arr.length] = num
        return this.arr
    }

    // 在数组开头插入元素
    unshift(num) {
        for (let i = this.arr.length; i > 0; i--) {
            // this.arr[i+1] = this.arr[i]
            this.arr[i] = this.arr[i - 1]
        }
        this.arr[0] = num
        return this.arr
    }

    // 从数组末尾删除元素
    pop() {
        // 使用delete关键字删除最后一个元素
        delete this.arr[this.arr.length - 1]
        // 数组的总长度减小1
        this.arr.length -= 1
        return this.arr
    }

    // 从数组开头删除元素
    shift() {
        for (let i = 0; i < this.arr.length; i++) {
            this.arr[i] = this.arr[i + 1]

        }
        //  数组总长度减小1
        this.arr.length -= 1
        return this.arr
    }

    // 在任意位置添加元素
    addRandomly(num, index) {
        // 分情况讨论,算法经常涉及到分情况讨论
        // 尽量使用三个等号
        if (index === 0) {
            this.unshift(num)
        } else if (index === this.arr.length) {
            this.push(num)
        } else if (0 < index < this.arr.length) {
            for (let i = this.arr.length; i > index; i--) {
                this.arr[i] = this.arr[i - 1]
            }
            this.arr[index] = num
            return this.arr
        } else {
            return false
        }
    }

    // 在任意位置删除元素
    deleteRandomly(index) {
        // 同样分情况讨论
        if (index === 0) {
            this.shift()
        } else if (index === this.arr.length - 1) {
            this.pop()
        } else if (0 < index < this.arr.length - 1) {
            for (let i = index; i < this.arr.length; i++) {
                this.arr[i] = this.arr[i + 1]
            }
            this.arr.length -= 1
            return this.arr
        } else {
            return false
        }
    }

    // every迭代方法
    every(fn) {
        for (let i = 0; i < this.arr.length; i++) {
            if (fn(this.arr[i]) === false) {
                return false
            }
        }
        return true
    }

    // some迭代方法
    some(fn) {
        // 与every方法相反
        for (let i = 0; i < this.arr.length; i++) {
            if (fn(this.arr[i] === true)) {
                return true
            }
        }
        return false
    }

    // map方法
    map(fn) {
        let arr1 = []
        for (let i = 0; i < this.arr.length; i++) {
            let result = fn(this.arr[i])
            arr1.push(result)
        }
        return arr1
    }

    // filter方法
    filter(fn) {
        let arr2 = []
        for (let i = 0; i < this.arr.length; i++) {
            let result = fn(this.arr[i])
            if (result === true) {
                arr2.push(this.arr[i])
            }
        }
        return arr2
    }

    // reverse方法
    reverse() {
        let arr3 = []
        for (let i = 0; i < this.arr.length; i++) {
            // 算法即为下面这个等式
            let index = this.arr.length - 1 - i
            arr3.push(this.arr[index])
        }
        return arr3
    }

    // sort方法
    sort() {
        // 嵌套循环，时间复杂度比较高
        while (true) {
            let count
            for (let i = 0; i < this.arr.length; i++) {
                count = 0
                if (this.arr[i] > this.arr[i + 1]) {
                    [this.arr[i], this.arr[i + 1]] = [this.arr[i + 1], this.arr[i]]
                    count++
                }
            }
            if (count === 0) {
                return this.arr
            }
        }
    }

    // min与max方法
    min() {
        this.sort()
        return this.arr[0]
    }

    max() {
        this.sort()
        return this.arr[this.arr.length - 1]
    }
}

array = new Array([4, 10, 8, 9])
// array是对象，array.arr才是对象里面的数组
// console.log(array.arr)
// let p = array.arr

// array.push(4)
// array.push(5)
// array.unshift(9)
// array.pop()
// array.shift()
// array.addRandomly(11, 0)
// array.deleteRandomly(3)
// console.log(array)

function isEven(x) {
    return (x % 2 === 0)
}

console.log(array.every(isEven));
console.log(array.map(isEven));
console.log(array.filter(isEven));
console.log(array.reverse());
console.log(array.sort());
console.log(array.min());
