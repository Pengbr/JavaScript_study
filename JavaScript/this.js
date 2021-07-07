// this可以理解为python中的self,指向调用的对象
function fun(){
    console.log(this.name);
}
fun();

var obj ={
    name:'孙悟空',
    sayName:fun
}

obj.sayName();
