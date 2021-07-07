const fs = require('fs');
const mkdirp = require('mkdirp');

// fs.stat 检测是文件还是目录
fs.stat('../hello.txt', (err, data) => {
    if (err) console.log(err);
    console.log(`是文件:${data.isFile()}`);
    console.log(`是目录:${data.isDirectory()}`);
})

let p = mkdirp('./upload/aaa/test', {mode: 0o777});
p.then((resolve) => {
    console.log('成功');
}, (reject) => {
    console.log('失败');
})

// 通过promise、async、await处理异步,async是将方法变为异步的方法，await是等待异步方法执行完成
// resolve、reject也是返回的promise对象