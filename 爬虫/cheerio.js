const cheerio = require('cheerio');
const axios = require('axios');
const fs = require('fs');
const url = require('url');
const path = require('path');
// 获取HTML文档的内容，内容的获取跟jQuery一样

let httpUrl = 'https://www.doutula.com/article/list/?page=1';
axios.get(httpUrl).then((res) => {
    // console.log(res.data);
    // cheerio解析HTML文档
    let $ = cheerio.load(res.data);
    $('#home .col-sm-9>a').each((i, el) => {
        let pageUrl = $(el).attr('href');
        let title = $(el).find('.random_title').text();
        let reg = /(.*?)\d/igs;
        title = reg.exec(title)[1];
        fs.mkdir('./img/' + title, (err) => {
            if (err) console.log(err);
            console.log('创建目录成功');
        });
        parsePage(pageUrl, title);
        // console.log(title);
    })
})

async function parsePage(url, title) {
    let res = await axios.get(url);
    let $ = cheerio.load(res.data);
    $('.pic-content img').each((i, el) => {
        let imgUrl = $(el).attr('src');
        // console.log(imgUrl);
        let extName = path.extname(imgUrl);
        let ws = fs.createWriteStream(`img/${title}/${title}-${i}${extName}`);
        axios.get(imgUrl, {responseType: 'stream'}).then((res) => {
            res.data.pipe(ws);
        });
    })
}
