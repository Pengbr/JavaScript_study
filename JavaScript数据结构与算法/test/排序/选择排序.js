/*
*  首先找到数组中最小的元素并返回，依次将最小的元素弹出数组并插入到新的数组中
* */

function findSmallest(arr) {
    let smallest = arr[0]
    let smallestIndex = 0
    for (let i = 0; i < arr.length; i++) {
        if (smallest > arr[i]) {
            smallest = arr[i]
            smallestIndex = i
        }
    }
    return smallestIndex
}

function selectSort(arr) {
    let newArr = []
    // 不能一边删除一边遍历，会出问题,考虑使用while循环
    while (arr.length > 0) {
        newArr.push(arr[findSmallest(arr)])
        // 使用splice方法删除元素
        // splice第一个参数代表要删除或插入元素的索引，第二个参数代表要删除元素的个数，0代表不删除元素
        // splice第三个可选参数代表想要插入的元素
        arr.splice(findSmallest(arr), 1)
    }
    return newArr
    // console.log(newArr)
}

let arr = [2, 4, 8, 1, 9, 5]
console.log(selectSort(arr))
