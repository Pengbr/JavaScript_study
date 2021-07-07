const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');
let num
let httpUrl = `https://www.ivsky.com/search.php?q=%E7%BE%8E%E5%A5%B3&page=${num}`

async function getPage(url) {
    let res = await axios.get(url);
    // console.log(res.data);
}

async function getImages(url) {
    let res = await axios.get(url);
    let $ = cheerio.load(res.data);
    let list = $('.left .pli li a img');
    // 图片链接地址list[i].attribs.src,图片名称list[i].attribs.alt
    for (let i = 0; i < 10; i++) {
        // console.log(list[i].attribs.src);
        // console.log(list[i].attribs.alt);
        let path = list[i].attribs.src;
        let name = list[i].attribs.alt;
        // 创建读写流下载图片
        let res = axios.get(path, {responseType: 'stream'});
        let ws = fs.createWriteStream('./美女图片/' + name + '.jpg');
        (await res).data.pipe(ws);
    }
}

for (num=1;num<10;num++){
    getImages(httpUrl);
}

