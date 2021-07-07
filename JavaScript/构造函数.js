// 构造函数可以类比python的类
// 构造函数通过使用new关键字调用

function Person(name,age,gender){
    this.name=name;
    this.age=age;
    this.gender=gender;
    // this.sayName=fun;
}

// function fun(){
//     console.log(this.name);
// }
Person.prototype.sayName=function(){
    console.log(this.name);
}

var per=new Person('br',22,'男');
console.log(Person);
console.log(per.name);

// 使用instanceof可以检查一个对象是否是一个类的实例,类似python中的isinstance
console.log(per instanceof Person);
