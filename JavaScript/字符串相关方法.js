var str='hello atguigu';
var result=str.concat('你好');
console.log(result);

// indexof() 检索一个字符串中是否含有指定内容，找不到返回-1
result=str.indexOf('h');
console.log(result);

// split()将一个字符串拆分为数组
str='abc,bcd,efg,hij';
result=str.split(',');
console.log(result);
