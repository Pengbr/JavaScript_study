var str='1a2b3c4d5e6f';
// split()方法将一个字符串拆分为数组
var result=str.split('c');
console.log(result);

result=str.split(/[A-z]/); // 按照任意字母进行拆分
console.log(result);

str='hello abc hello abc aec afc';
result=str.search(/a[bef]c/); // search()方法,不能全局匹配，只会查找第一个
console.log(result);

str='1a2b3c4d5e6f7';
result=str.match(/[A-z]/g); // match()方法，默认找到第一个符合要求的内容就会停止检索，我们可以设置正则表达式为全局模式，这样就会匹配到所有的内容
console.log(result);

str='1a2b3c4d5e6f7';
result=str.replace(/[A-z]/g,''); // replace()方法默认只替换第一个，可以用正则表达式的全局模式
console.log(result);
