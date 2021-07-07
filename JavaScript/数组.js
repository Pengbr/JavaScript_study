// 创建数组对象,数组类似python列表
var arr = new Array();
console.log(typeof arr);
arr[0]=10;
arr[1]=33;
arr[2]=22;
console.log(arr[0]);
console.log(arr.length);
arr.length=10;
console.log(arr);
arr.length=2;
console.log(arr);
// 向数组最后一位添加元素
arr[arr.length]=30;
console.log(arr);

var arr=[];
console.log(typeof arr);
var arr=[1,2,3,4,5,10];
console.log(arr);
// 数组里面可以放入任意数据类型
// arr[function(){console.log('haha')}];
// arr[0]();

var arr=['孙悟空','猪八戒','沙和尚'];
// push()方法，向数组末尾添加元素,并返回数组的长度
var result=arr.push('唐僧','白骨精','玉兔精');
console.log(arr);
console.log(result);

// pop()方法，该方法可以删除数组的最后一个元素,并将删除的元素返回
var result=arr.pop();
console.log(arr);
console.log(result);

// unshift()方法，向数组开头添加元素，并返回新的长度,其它元素会一次修改索引
arr.unshift('牛魔王');
console.log(arr);

// shift()方法,删除数组的第一个元素,并返回该元素
arr.shift();
console.log(arr);


// 数组遍历,i代表index
var arr=['孙悟空','猪八戒','沙和尚'];
for (var i=0;i<arr.length;i++){
    console.log(arr[i]);
}
