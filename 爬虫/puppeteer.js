let puppeteer = require('puppeteer');

async function test() {
    // 实例开启浏览器,options可以配置浏览器为无界面和有界面
    let options = {
        defaultViewport: {
            width: 1400,
            height: 800
        },
        headless: false
    }
    const browser = await puppeteer.launch(options);
    // 打开页面
    const page = await browser.newPage();
    await page.goto('https://www.dytt8.net/index.htm');
    // 截屏
    // await page.screenshot({path: 'screenshot.png'});
    // 获取页面内容
    // $$eval使回调函数运行在浏览器中
    let elements =await page.$$eval('#menu li a', (elements) => {
        let eles = [];
        elements.forEach((item, index) => {
            // console.log(item.innerText);
            if (item.getAttribute('href') != '#') {
                let eleObj = {
                    href: item.getAttribute('href'),
                    text: item.innerText
                }
                eles.push(eleObj);
                console.log(eleObj);
            }
        })
        return eles;
    })
    // 对浏览器的内容进行监听控制台的输出
    // page.on('console', (eventMsg) => {
    //     console.log(eventMsg.text());
    // })
    console.log(elements);
    const homePage=await browser.newPage();
    await homePage.goto(elements[2]);
}

test();
