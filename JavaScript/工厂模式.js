// 使用工厂方法创建对象,通过该方法可以大批量创建对象

function createPerson(name,age,gender){
    var obj=new Object();
    obj.name=name;
    obj.age=age;
    obj.gender=gender;
    obj.sayName=function(){
        console.log(this.name);
    }
    return obj;
}
var obj2=createPerson('孙悟空',18,'男');
var obj3=createPerson('白骨精',16,'女');
console.log(obj2);
console.log(obj3);
