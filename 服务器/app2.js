const url = require('url');

let api = 'http://www.itying.com?name=zhangsan&age=20';

// console.log(url.parse(api,true));
let getValue = url.parse(api, true).query;
console.log(getValue);
console.log(`姓名:${getValue.name}--年龄:${getValue.age}`);
