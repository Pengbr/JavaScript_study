// 输入node-http-server自动生成
const http = require('http');
const fs = require('fs');
const common = require('./common.js');
http.createServer(function (request, response) {
    let pathname = request.url;
    pathname = pathname == '/' ? '/index.html' : pathname;
    // console.log(pathname);
    if (pathname !== '/favicon.ico') {
        fs.readFile('./' + pathname, (err, data) => {
            if (err) {
                response.writeHead(404, {'Content-Type': 'text/html;charset="utf-8"'});
                response.end('访问的页面不存在');
            } else {
                response.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
                response.end(data);
            }
        })
    }
}).listen(3000);

console.log('Server running at http://127.0.0.1:3000/');

