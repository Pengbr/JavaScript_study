var obj={
    name:'br',
    age:22,
    gender:'boy',
    address:'zhuhai'
}
for (var n in obj){
    console.log(n,obj[n]);
}
// 整个页面就是一个window对象
// 变量提升（提前），使用var关键字声明的变量，会在所有的代码执行之前被声明，但是不会赋值
// 函数声明也会提前

console.log(Date());
