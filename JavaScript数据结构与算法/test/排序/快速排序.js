// D&C 分而治之思想 递归算法
function quickSort(arr) {
    // 基线条件
    if (arr.length <= 1) {
        return arr
    } else {
        let pivot = arr[0]
        // 使用过滤器生成数组，或用数组生成式等等
        let less = arr.filter((i) => {
            return i < pivot
        })
        let greater = arr.filter((j) => {
            return j > pivot
        })
        less=quickSort(less)
        greater=quickSort(greater)
        return [...less, pivot, ...greater]
    }
}

let arr = [3, 6, 9, 2, 5, 7, 1]
console.log(quickSort(arr))

