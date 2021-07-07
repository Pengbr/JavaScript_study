// 封装栈类 内部基于数组实现
function Stack() {
    // 栈中的属性
    this.items = [];
    // 栈的相关操作
    // 1、将元素压入栈
    // 给对象实例添加方法
    // this.push = function () {
    //
    // }
    // 或者直接给类添加方法，更加节省空间
    Stack.prototype.push = function (element) {
        this.items.push(element);
    }
    // 2、从栈中取出元素
    Stack.prototype.pop = function () {
        return this.items.pop();
    }
    // 3、查看一下栈顶元素
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1];
    }
    // 4、判断栈是否为空
    Stack.prototype.isEmpty = function () {
        return this.items.length == 0;
    }
    // 5、获取栈中元素的个数
    Stack.prototype.size = function () {
        return this.items.length;
    }
    // 6、toString方法 重写toString方法
    Stack.prototype.toString = function () {
        let resultString = '';
        for (let i = 0; i < this.items.length; i++) {
            resultString += this.items[i] + ' ';
        }
        return resultString;
    }
}

// 栈的使用
let s = new Stack();
s.push(20);
s.push(10);
s.push(100);
s.push(77);
console.log(s);
s.pop();
s.pop();
console.log(s);
console.log(s.peek());
console.log(s.size());
console.log(s.isEmpty());
console.log(s.toString());


