function Person(name,age,gender){
    // 类似对象属性和对象方法
    this.name=name;
    this.age=age;
    this.gender=gender;
}

var per =new Person('孙悟空',18,'男');
console.log(per);
// 重写方法
per.toString=function(){
    return '我是一个快乐的小person'
}
console.log(per.toString());
