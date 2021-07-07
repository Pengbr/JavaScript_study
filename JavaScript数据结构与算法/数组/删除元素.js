let numbers = [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// 创建新的数组,重新定义索引
Array.prototype.reIndex = function (myArray) {
    const newArray = [];
    for (let i = 0; i < myArray.length; i++) {
        if (myArray[i] !== undefined) {
            newArray.push(myArray[i]);
        }
    }
    return newArray;
}
// 创建移除第一个元素的方法
Array.prototype.removeFirstPosition = function () {
    for (let i = 0; i < this.length; i++) {
        this[i] = this[i + 1];
    }
    // 给移除元素后的数组重新定义索引
    return this.reIndex(this);
}

numbers = numbers.removeFirstPosition();
console.log(numbers);

// 可以通过shift方法删除数组的第一个元素
numbers.shift();
console.log(numbers);
