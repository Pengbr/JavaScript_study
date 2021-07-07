class ArrayList {
    constructor() {
        this.array = []
    }

    insert(item) {
        this.array.push(item)
    }

    toString() {
        return this.array.join('-')
    }

    // 交换两个位置的数据
    swap(m, n) {
        let temp = this.array[m]
        this.array[m] = this.array[n]
        this.array[n] = temp
    }

    bubbleSort() {
        let length = this.array.length
        for (let j = length - 1; j >= 0; j--) {
            for (let i = 0; i < j; i++) {
                if (this.array[i] > this.array[i + 1]) {
                    this.swap(i, i + 1)
                }
            }
        }
    }

    selectionSort() {
        let length = this.array.length
        for (let j = 0; j < length - 1; j++) {
            let min = j
            for (let i = min + 1; i < length; i++) {
                if (this.array[min] > this.array[i]) {
                    min = i
                }
            }
            this.swap(min, j)
        }
    }
}

let list = new ArrayList()
list.insert(66)
list.insert(88)
list.insert(12)
list.insert(87)
list.insert(100)
list.insert(5)
list.insert(566)
list.insert(23)
// console.log(list.toString())
