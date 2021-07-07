// 每个函数都有prototype属性
// 原型个人感觉类似类方法和类属性

function MyClass(){

}
MyClass.prototype.a=123;
MyClass.prototype.sayHello=function() {
    console.log('hello');
}
var mc =new MyClass();
console.log(mc.__proto__);
console.log(mc.a);
console.log(mc.hasOwnProperty('a'));
console.log(mc.sayHello);
