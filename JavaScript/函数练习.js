function isEven(number){
    // if (number%2==0){
    //     return true;
    // }else{
    //     return false;
    // }
    return number%2==0;
}

var result=isEven(123);
console.log(result);


function area(r){
    return Math.PI*r*r;
}

var result=area(2);
console.log(result);


function fun1(){
    function fun2(){
        console.log('我是fun2');
    }
    return fun2;
}

var a=fun1();
console.log(a);
a();

// 立即执行函数
(function(){
    console.log('我是匿名函数');
})();

(function(a,b){
    console.log(a+b);
})(2,3);