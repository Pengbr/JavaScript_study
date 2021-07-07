// 正则表达式用于定义一些字符串的规则，计算机根据正则表达式来检查一个字符串是否符合规则，将字符串中符合规则的提取出来
// 创建正则表达式的对象，需要两个参数，正则表达式、匹配模式   regular expression
// 匹配模式可选值：i(ignore) 忽略大小写  g(global) 全局匹配模式
var reg =new RegExp('abC','i');
console.log(reg);

var result=reg.test('Abc'); // 检查字符串是否符合正则表达式规则
console.log(result);

// 使用字面量来创建正则表达式  语法：var 变量=/正则表达式/匹配模式
var reg=/a/i;
console.log(reg.test('abc'));

reg=/a|b|c/; // a或b或c |或的意思
console.log(reg.test('a'));

reg=/[a-z]/i; // []里的内容也是或的关系
console.log(reg.test('G'));

reg=/a[bde]c/; 
console.log(reg.test('aec'));

reg=/[^ab]/; // [^] 除了
console.log(reg.test('c'));

reg=/[0-9]/;
console.log(reg.test('123'));

// 量词，通过设置量词可以设置一个内容出现的次数
// ab为一组，出现一到三次
reg=/(ab){1,3}/;
console.log(reg.test('abab'));

// +表示至少一个，*表示零个或多个，？表示零个或一个
reg=/ab+c/;
console.log(reg.test('abbc'));

reg=/^a|c$/; // ^表示开头,$表示结尾
console.log(reg.test('abvc'));

reg=/^1[3-9][0-9]{9}$/;
console.log(reg.test('15810255877'));

reg=/\./; // .表示任意字符,要表示单纯的点需要转义
console.log(reg.test('abc.'));

// \w  \s  \d  \b 等等
reg=/\w/; // \w表示任意字母数字下划线，\W与\w正好相反
console.log(reg.test('abc'));
// \d 表示任意数字，\s 表示空格, \b 表示单词边界
reg=/\bchild\b/;
console.log(reg.test('children'));

reg=/^\w+@[A-z0-9]+\.[A-z]{2,5}$/;
console.log(reg.test('1303089388@qq.com'));
