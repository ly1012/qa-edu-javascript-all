const expect = require('chai').expect;      //引入 BDD 风格的断言库 expect.js
const puppeteer = require('puppeteer');
const config = require('../../main/config/config.js');

describe("Page API 用法", async function () {
    //设置本块下所有用例的超时时间为 5 秒
    this.timeout(5000);

    let browser, page;

    before("启动浏览器并打开一个标签页", async function () {
        browser = await puppeteer.launch({headless:true});
        page = await browser.newPage();
    });

    after("关闭浏览器", async function () {
        await browser.close();
    });

    it('一些 Page API', async function () {
        await page.goto('https://www.baidu.com');           //跳转到指定 URL
        await page.type("#kw","puppeteer");                 //输入
        await page.click("#su");                            //单击
        await page.waitForTimeout(1000);                    //等待一秒，等待页面加载一些内容
        await page.screenshot({path: config.root_path + 'output/screenshot/baidu.png',fullPage:true});     //截图到指定目录
    });

});