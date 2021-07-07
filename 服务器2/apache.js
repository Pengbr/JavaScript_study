const http = require('http');
const fs = require('fs');

let server = http.createServer();

server.on('request', (request, response) => {
    let url = request.url;
    // 规范尽量使用全等
    // if (url === '/') {
    //     response.end('hello world');
    // } else {
    //     response.end('404');
    // }
    // if (url === '/') {
    //     fs.readFile('../app/www/index.html', (err, data) => {
    //         if (err) return response.end('404 not found');
    //         response.end(data);
    //     })
    // } else if (url === '/a.txt') {
    //     response.setHeader('Content-type','text/plain;charset=utf-8');
    //     fs.readFile('../app/www/a.txt', (err, data) => {
    //         if (err) return response.end('404 not found');
    //         response.end(data);
    //     })
    // } else if (url === '/index.html') {
    //     fs.readFile('../app/www/index.html', (err, data) => {
    //         if (err) return response.end('404 not found');
    //         response.end(data);
    //     })
    // } else if (url === '/apple/login.html') {
    //     fs.readFile('../app/www/apple/login.html', (err, data) => {
    //         if (err) return response.end('404 not found');
    //         response.end(data);
    //     })
    // }

    // let dir = '../app/www';
    // let filepath = '/index.html';
    // if (url !== '/') {
    //     filepath = url;
    // }
    // fs.readFile(dir + filepath, (err, data) => {
    //     if (err) return response.end('404 not found');
    //     response.end(data);
    // })
    // console.log(filepath, dir + filepath);


    let dir='../app/www';
    fs.readFile('./template.html', ((err, data) => {
        if(err) return response.end('404');
        response.end(data);
        fs.readdir(dir,((err1, files) => {
            if(err1) return response.end('404');
            console.log(files);
        }))
    }))
})

server.listen(3000, () => {
    console.log('服务器启动成功');
})
