const http = require('http');
const url = require('url');
// const supervisor = require('supervisor');

http.createServer((req, res) => {
    // 获取客户端传过来的URL信息
    if (req.url !== '/favicon.ico') {
        let userinfo = url.parse(req.url, true).query;
        console.log(userinfo.name, userinfo.age);
    }
    // console.log(req.url);

    // 设置响应头
    res.writeHead(200, {'content-type': 'text/html;charset=utf8'});
    res.write('你好 nodejs');
    // 结束响应
    res.end();
}).listen(3000);

