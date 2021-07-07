// 当网页原码没有任何东西时。要通过ajax请求进行爬取
const axios = require('axios');
const fs = require('fs');
const path = require('path');

async function getPage(num) {
    let httpUrl = 'http://www.app-echo.com/api/recommend/sound-day?page=' + num;
    let res = await axios.get(httpUrl);
    // console.log(res.data.list);
    res.data.list.forEach((item, i) => {
        let title = item.sound.name;
        let mp3Url = item.sound.source;
        let fileName = path.parse(mp3Url).name;
        // console.log(path.parse(mp3Url));
        let content = `${title},${mp3Url},${fileName}\n`;
        fs.writeFile('music.txt', content, {flag: 'a'}, () => {
            console.log('写入完成' + title);
        });
        console.log(fileName);
        console.log(mp3Url);
        download(mp3Url, fileName);
    })
}

async function download(mp3Url, fileName) {
    let res = axios.get(mp3Url, {responseType: 'stream'});
    let ws = fs.createWriteStream('./mp3/' + fileName + '.mp3');
    (await res).data.pipe(ws);
    (await res).data.on('end', () => {
        ws.close();
    })
}

for (let i = 1; i <= 10; i++) {
    getPage(i);
}


