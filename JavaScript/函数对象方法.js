function fun(){
    console.log('我是fun函数');
    // arguments是一个类数组对象,保存实参,类似python中的*args
    console.log(arguments);
    console.log(arguments instanceof Array);
    console.log(arguments.length);
    console.log(arguments[1]);
}

// 可以将对象作为第一个参数,可以改变this的指针,参数是谁this就是谁
// var obj={};
// fun.call(obj);
fun.apply();
fun.call();
fun('hello',true);

