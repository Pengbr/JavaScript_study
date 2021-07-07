// alert('我是外部JS')
// document.write('haha')
var a = 123;
a=456;
a++;
console.log(a);
console.log(typeof a,'\n');

var str = 'hello';
console.log(str);
console.log(typeof str,'\n');

console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE*2);
console.log(Number.MIN_VALUE,'\n');

var b;
b=Infinity;
console.log(typeof b,'\n');

// NaN    not a number
var c;
c=NaN;
console.log(typeof c,'\n');

var bool = true;
console.log(bool);
console.log(typeof bool,'\n');

var d = null;
console.log(d);
console.log(typeof d,'\n');

var e;
console.log(e);

var f=123;
var g
g=f.toString();
console.log(typeof g);
f=String(f);
console.log(typeof f);


var h = '123';
h=Number(h);
console.log(typeof h);
var i = true;
i=Number(i);
console.log(i);

// parseInt() 将一个字符串转换为整型
// parseFloat() 将一个字符串转为浮点数
var j ='123.456px';
// j=parseInt(j);
// console.log(j);
j=parseFloat(j);
console.log(j);

var k = 0x10; //十六进制
console.log(k);
var k = 0o70; //八进制
console.log(k);
var k = '070';
k=parseInt(k,10); //第二个参数代表转化为十进制
console.log(k);

var l =123;
l=Boolean(l);
console.log(l);
