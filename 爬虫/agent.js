const axios = require('axios');

let httpUrl = 'https://www.doutula.com/article/list/?page=1';
// 使用代理
options = {
    proxy: {
        host: '36.112.139.146',
        port: 3128
    }
}
axios.get(httpUrl, options).then((res) => {
    console.log(res.data);
})
