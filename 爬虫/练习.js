let axios = require('axios');
// 获取其实页面的所有分类
// 获取分类里的内容链接
// 根据链接获取详细信息
// nodejs中几乎每个API都可以传入回调参数
let httpUrl = `https://www.1905.com/vod/list/n_1/o3p1.html`;

// 获取页面分类
async function getClassUrl() {
    let p = await req(httpUrl);
    // console.log(p);
    let reg = /<span class="search-index-L">栏目(.*?)<div class="grid-12x">/igs
    // [1]代表组一,正则表达式的分组
    let result = reg.exec(p.data)[1];
    // console.log(result);
    let reg1 = /<a href="(.*?)" .*?>(.*?)<\/a>/igs;
    let result1;
    let arrClass = [];
    while (result1 = reg1.exec(result)) {
        let obj = {
            className: result1[2],
            url: result1[1]
        }
        arrClass.push(obj);
        getMovies(obj.url);
    }
    console.log(arrClass);
    // console.log(result1);
}

// 获取分类中的电影
async function getMovies(url) {
    let p1 = await req(url);
    let reg = /<a class="pic-pack-outer" target="_blank" href="(.*?)" .*?>/igs
    let res;
    let arrlist = [];
    while (res = reg.exec(p1.data)) {
        arrlist.push(res[1]);
    }
    console.log(arrlist);
}

// 发送axios请求
function req(url) {
    return new Promise((resolve, reject) => {
        axios.get(url).then(value => {
            resolve(value);
        }, reason => {
            reject(reason);
        })
    })
}


getClassUrl();
