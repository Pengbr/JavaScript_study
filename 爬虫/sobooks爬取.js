const puppeteer = require('puppeteer');
const axios = require('axios');

let httpUrl = 'https://sobooks.cc/';
(async function f() {
    let debugOptions = {
        headless: false,
        slowMo: 250,
        defaultViewport: {
            width: 1400,
            height: 800
        }
    }
    let options = {headless: true};
    let browser = await puppeteer.launch({debugOptions});

    async function getAllNum() {
        let page = await browser.newPage();
        await page.goto(httpUrl);
        let pageNum = await page.$eval('.pagination li span:last', (element) => {
            let text = element.innerHTML;
            text = text.substring(1, length - 2).trim();
            return text;
        })
        return pageNum;
    }

    let pageNumber = await getAllNum();
    console.log(pageNumber);
})()
