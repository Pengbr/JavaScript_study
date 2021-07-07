var a = true;
console.log(a)
a=!a; //对a进行非运算，逻辑取反
console.log(a)

var b = false;
b=!!b; //两次取反
console.log(b);

var c =10;
c=!c; //先转换为bool值然后取反
console.log(c)

var result=true&&false; //与运算符
console.log(result);
result=false||true; //或运算符
console.log(result);

var result =2&&3;
console.log(result);

// JS中到处都是隐式转换

// 输出unicode编码对应的符号
console.log("\u2620");
console.log('1'==1);

// ===表示全等，不会做隐式类型转换
console.log('123'===123);
// !==表示不全等，不会做自动的类型转换
console.log('1'!==1);