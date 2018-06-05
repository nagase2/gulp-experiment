


var fs = require('fs');


'use strict'


describe('自動テストサンプル', () => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000
  
  it('puppeteer', async () => {
    const puppeteer = require('puppeteer');
    const url = process.env.URL || 'http://172.19.6.88:8080/jast-sample-develop/login';

    const browser = await puppeteer.launch({
      headless: false,
      // See flags at https://peter.sh/experiments/chromium-command-line-switches/.
      args: [
       // '--disable-infobars', // Removes the butter bar.
       // '--start-maximized',
        // '--start-fullscreen',
         '--window-size=1920,1080',
        // '--kiosk',
        // '--no-sandbox',
        // '--disable-setuid-sandbox'
      ],
    });

    const page = await browser.newPage();

    // const cookies = await page.cookies();
   //  await page.deleteCookie(cookies[0])
    

    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto(url,{waitUntil: "domcontentloaded"});
    //await page.evaluate('document.documentElement.webkitRequestFullscreen()');

    //await page.waitFor(1000);
    await page.once('load', () => console.log('Page loaded!'));

    await page.type('input[name="username"]', "jc580");
    await page.type('input[name="password"]', "jc580");
  


   
    await page.click('#submit-button')
    //await page.waitForSelector('#feature-content')
  
    //ＪＡＳＴサンプルトップをクリック
    await page.waitFor('#ui-id-3', {timeout: 120000});
    await page.click('#ui-id-3')
    await page.waitFor(500);
    await page.waitFor('#j2_1_anchor', {timeout: 120000});
    await page.click('#j2_1_anchor')
    await page.waitFor(500);
    await page.waitFor('#j2_2_anchor', {timeout: 120000});
    await page.click('#j2_2_anchor')
    console.log("j2-2 anchor ")
    await page.waitFor(500);
    await page.waitFor('#j2_3_anchor', {timeout: 120000});
    await page.click('#j2_3_anchor');
    //await page.click('a[href="/jast-sample-develop/xx/basicsample/crncymanagement/?doInitSearch=false"]')
    console.log("リンクをクリックしました。")
    await page.waitFor('#crncyCd', {timeout: 120000});
    await page.waitFor(500);

    console.log("入力します")

    await page.focus('#crncyCd');
    await page.type('#crncyCd','USD')
    await page.waitFor(500);
    //検索ボタン
    await page.click('#f5');

    
    //await page.goto('http://172.19.6.88:8080/jast-sample-develop/xx/basicsample/crncymanagement/');
   
    // await page.waitFor('body > div.l-container > div > div > article > header > h1',{timeout: 120000})
    //body > div.l-container > div > div > article > header > h1


    //画面上の値を確認して、assertionを行う。

   
    // await page.waitForNavigation({timeout: 60000, waitUntil: "domcontentloaded"});
    
    
    await page.waitFor(3000);
    
    //networkidle0 
    //load 
    await page.screenshot({path: './jast.png',fullPage:true});

    // j_username
    // j_password

    //console.log(page.getValue)
    await page.deleteCookie(cookies[0])
    await browser.close();
  })


});
