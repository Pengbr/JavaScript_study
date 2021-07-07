function Stack() {
    this.items = [];

    Stack.prototype.push = function (element) {
        this.items.push(element);
    }

    Stack.prototype.pop = function () {
        return this.items.pop();
    }

    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1];
    }

    Stack.prototype.isEmpty = function () {
        return this.items.length == 0;
    }

    Stack.prototype.size = function () {
        return this.items.length;
    }

    Stack.prototype.toString = function () {
        let resultString = '';
        for (let i = 0; i < this.items.length; i++) {
            resultString += this.items[i] + ' ';
        }
        return resultString;
    }
}


// 封装函数将十进制转二进制
function decToBin(decNumber) {
    // 1、定义一个栈对象
    let s = new Stack();
    // 2、循环操作
    while (decNumber > 0) {
        // 获取余数放入栈中
        s.push(decNumber % 2);
        // 获取整除后的结果作为下一次运算的数字
        decNumber = Math.floor(decNumber / 2);
    }
    // 从栈中取出数字
    let binaryString = '';
    while (!s.isEmpty()) {
        binaryString += s.pop();
    }
    return binaryString;
}

console.log(decToBin(10));
console.log(decToBin(100));
