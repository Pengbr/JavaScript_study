// 创建一个函数对象
var fun = new Function("console.log('hello world')");
console.log(typeof fun);
fun();

function test(){
    console.log('hello world');
}
test();

// 匿名函数,就是没有名字的函数
var demo=function(){
    console.log('haha')
}
demo();

function sum(a,b){
    console.log(a+b);
}
sum(1,2,3); // 多的参数也不会影响
