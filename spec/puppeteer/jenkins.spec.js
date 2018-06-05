


var fs = require('fs');


'use strict'


describe('自動テストサンプル', () => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000
  
  it('puppeteer', async () => {
    const puppeteer = require('puppeteer');
    const url = process.env.URL || 'http://172.31.228.24:28080/login';

    const browser = await puppeteer.launch({
      headless: false,
      // See flags at https://peter.sh/experiments/chromium-command-line-switches/.
      args: [
       // '--disable-infobars', // Removes the butter bar.
       // '--start-maximized',
        // '--start-fullscreen',
         //'--window-size=1920,1080',
        // '--kiosk',
        '--no-sandbox'
      ],
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 720, height: 680 });
    await page.goto(url,{waitUntil: "domcontentloaded"});
    //await page.evaluate('document.documentElement.webkitRequestFullscreen()');

    //await page.waitFor(1000);
    await page.once('load', () => console.log('Page loaded!'));

    await page.type("#j_username", "yoshimasa_nagase");
    await page.type('input[name="j_password"]', "111");
    await page.click('#yui-gen1-button')
    await page.waitForSelector('.rss-bar-item-link')
  
    await page.screenshot({path: './jenkins.png'});

    // j_username
    // j_password

    console.log(page.getValue)

    await browser.close();
  })


});
