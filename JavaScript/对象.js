// 构造函数
var obj=new Object();
console.log(obj);
console.log(typeof obj);

obj.name='孙悟空';
obj.gender='男';
obj.age='18';
console.log(obj);
obj.name='br';
console.log(obj);

delete obj.age;
console.log(obj);

obj['age']='18';
console.log(obj);

console.log('test' in obj);
console.log('name' in obj);

var obj2={
    name:'猪八戒',
    age:28,
    gender:'男',
    test:{name:'br'}
}
console.log(obj2);
// 除了基本类型外，一切皆对象