// 结合fs发送文件中的数据，不同的资源对应的content-type是不一样的，图片不需要指定编码，一般只为字符数据指定编码
const http = require('http');
const fs = require('fs');

let server = http.createServer();

server.on('request', (request, response) => {
    let url = request.url;
    if (url === '/') {
        fs.readFile('../source/index.html', (err, data) => {
            if (err) {
                response.setHeader('Content-Type', 'text/plain;charset=utf-8');
                response.end('文件读取失败');
            } else {
                response.setHeader('Content-Type', 'text/html;charset=utf-8');
                response.end(data.toString());
            }
        })
    } else if (url === '/img') {
        fs.readFile('../source/1.jpeg', (err, data) => {
            if (err) console.log('文件读取失败');
            // 图片不用指定编码了，常说的编码是针对字符的
            response.setHeader('Content-type', 'image/jpeg');
            response.end(data);  // end方法可以接受二进制数据和字符串
        })
    }
})

server.listen(3000, () => {
    let position = 'http://127.0.0.1:3000';
    console.log('服务器运行在' + `${position}`);
})
