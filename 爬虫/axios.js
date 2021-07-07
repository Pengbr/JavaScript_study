let axios = require('axios');
// console.log(axios);
// 爬虫假装浏览器
let httpUrl = 'https://www.dytt8.net/index.htm';
let httpUrl1 = 'https://www.bilibili.com/'
// get方法返回的是promise对象,axios基于promise
axios.get(httpUrl1,
    {
        headers: {
            'Upgrade-Insecure-Requests': 1,
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36'
        }
    }).then((res) => {
    console.log(res);
})




