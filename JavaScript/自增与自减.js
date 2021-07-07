var a =1;
a++;
++a;
console.log(a);
console.log(a++);
// a++等于原变量的值（自增前的值）；++a等于原变量自增后的值

var c =10;
c++;
console.log(c++); //先取值再运算
var d=20;
console.log(++d); //先运算再取值

var result=d++ + ++d +d;
console.log(result)


var n1=10,n2=20;
var n=n1++;
console.log('n=',n);
console.log('n1=',n1);
n=++n1;
console.log('n=',n);
console.log('n1=',n1);
n=n2--;
console.log('n=',n);
console.log('n2=',n2);
n=--n2;
console.log('n=',n);
console.log('n2=',n2);

