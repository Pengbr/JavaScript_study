let url = require('url');
console.log(url);
let httpUrl = 'https://www.huawei.com/cn/?ic_medium=direct&ic_source=surlent';
// url.parse(httpUrl);

let targetUrl = 'http://www.taobao.com/';
httpUrl = './sxt/qianduan/laochen.html';
let newUrl = url.resolve(targetUrl, httpUrl);
console.log(newUrl);

// axios请求库
