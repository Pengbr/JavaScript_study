var a =123;
var result=typeof a;
console.log(result);
// typeof的返回值是字符串
console.log(typeof result);

// 在javascript中任何值和字符串相加都会先转换为字符串
result=123+'1';
console.log(result);
var b = 123
b=b+''
console.log(typeof b)

// 任何值做减乘除运算时都会自动转换为Number
// 隐式类型转换
result=100-'1';
console.log('result=',result);

c=true;
c=-c
console.log(typeof c)
console.log(c)

// 任何类型前面添加一个加号或减号会变成Number类型
d=1+ +'2'+3
console.log(d)
