const http = require('http');

let server = http.createServer();

server.on('request', (request, response) => {
    let url = request.url;
    // 设置不同的响应头类型就会得到不同的结果
    if (url === '/') {
        response.setHeader('Content-type', 'text/plain;charset=utf-8');
        response.end('<h1>哈哈</h1>');
    }
    if (url === '/html') {
        response.setHeader('Content-type', 'text/html;charset=utf-8');
        response.end('<h1>哈哈</h1>');
    }
})

server.listen(5000, () => {
    let position = 'http://127.0.0.1:5000'
    console.log(`服务器运行在${position}`);
    console.log('服务器运行成功');
})
