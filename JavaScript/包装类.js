// JS中提供了三个包装类，通过这三个包装类可以将基本数据类型的数据转换为对象
// 创建了一个Number类型的对象
var num=new Number(3);
console.log(typeof num);

var str=new String('hello');
console.log(str);

var bool=new Boolean(true);
console.log(typeof bool);

// 对象转bool值都为true
// 方法和属性只能添加给对象，不能添加给基本数据类型
// 当我们对一些基本数据类型的值去调用属性和方法时，浏览器会临时使用包装类将其转换为对象，然后再调用对象的属性和方法
