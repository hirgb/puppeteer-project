//获取网页大小

const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://themis.hirgb.com');
    const c = await page.content();
    console.log(c);

    await browser.close();
})();