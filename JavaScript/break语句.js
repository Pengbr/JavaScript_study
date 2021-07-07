// 可以为循环语句创建一个label,来标识当前的循环
// label:循环语句
// 使用break语句时，可以在break后跟一个label
// 使用continue也可以后跟一个label
// 这样break会结束指定的循环，而不是最近的

// console.time() 可以用来开启一个计时器,里面的字符串代表计时器的名字
console.time('test');
outer:
for (var i=0;i<5;i++){
    console.log('@外层循环'+i);
    for (var j=0;j<5;j++){
        break outer;
        console.log('内层循环：'+j);
    }
}
console.timeEnd('test'); // 用来停止一个计时器,里面的字符串代表计时器名字
