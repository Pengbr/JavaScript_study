const http = require('http');

let server = http.createServer();

server.on('request', (request, response) => {
    // 请求路径都是以/开头,端口号后头的东西
    console.log('收到客户端请求了' + '请求路径是：' + request.url);
    // 可以定位到访问此服务器的ip和端口号等等
    console.log(response.socket.remoteAddress);
    if (request.url === '/') {
        // 写响应头
        response.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
        response.write('hello nodejs');
        response.end();
    } else if (request.url === '/login') {
        response.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
        response.write('登录');
        response.end();
    } else if (request.url === '/quit') {
        response.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
        response.write('退出');
        response.end();
    } else if (request.url === '/products') {
        response.writeHead(200, {'Content-Type': 'text/html;charset="utf-8"'});
        const products = [
            {
                name: '苹果 x',
                price: 8888
            },
            {
                name: '菠萝 x',
                price: 5000
            },
            {
                name: '小辣椒 x',
                price: 1999
            }
        ]
        // 响应内容只能是二进制数据或者字符串
        response.end(JSON.stringify(products));
    } else {
        response.writeHead(404, {'Content-Type': 'text/html;charset="utf-8"'});
        response.end('访问的页面不存在');
    }

})

server.listen(3000, () => {
    let position = 'http://127.0.0.1:3000/';
    console.log(`服务器启动成功了，可以通过${position}访问`);
})

