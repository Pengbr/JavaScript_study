const template = require('art-template');
const fs = require('fs');
const http = require('http');

let server = http.createServer();

server.on('request', (request, response) => {
    fs.readFile('./tpl.html', ((err, data) => {
        if (err) return err;
        // 服务器端渲染页面
        // 例如京东的商品列表就是采用的服务端渲染，目的是为了SEO(爬虫)搜索引擎优化
        // 而它的商品评论列表为了用户体验，而且也不需要SEO优化，所以采用客户端异步渲染
        let result = template.render(data.toString(), {
            name: 'jack'
        })
        console.log(result);
        response.end(result);
    }))
})

server.listen(3000, () => {
    console.log('服务器启动成功');
})

