//获取网页大小

const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://themis.hirgb.com');
    await page.screenshot({
        path: 'themis.png'
    })

    await browser.close();
})();