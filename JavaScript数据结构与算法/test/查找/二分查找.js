function binarySearch(arr, item) {
    // low/high/mid代表索引值
    let low = 0
    let high = arr.length - 1
    while (low <= high) {
        // 向下取整
        let mid = Math.floor((low + high) / 2)
        if (item === arr[mid]) {
            // 返回索引值
            return `找到了，索引值为${mid}`
        } else if (item < arr[mid]) {
            high = mid - 1
        } else if (item > arr[mid]) {
            low = mid + 1
        }
    }
    return null
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(binarySearch(arr, 5));
