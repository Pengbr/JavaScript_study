// 语法：
//     条件表达式？语句1：语句2
// 条件表达式为真执行语句1，否则执行语句2
true?console.log('ha'):console.log('he');
false?console.log('ha'):console.log('he');

var a =10;
var b=20;
a>b?console.log('a大'):console.log('b大');
var max=a>b?a:b;
console.log('max=',max);

// 运算符的优先级：与或非
// var不能改变变量的作用域，let可以