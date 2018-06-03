


var fs = require('fs');


'use strict'

var mo1 = require('../lib/module1');

describe('自動テストサンプル', () => {
  jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000
  
  it('puppeteer', async () => {
    const puppeteer = require('puppeteer');
    const url = process.env.URL || 'https://news.ycombinator.com/';

    const browser = await puppeteer.launch({
      headless: true,
      // See flags at https://peter.sh/experiments/chromium-command-line-switches/.
      args: [
       // '--disable-infobars', // Removes the butter bar.
       // '--start-maximized',
        // '--start-fullscreen',
         '--window-size=1920,1080',
        // '--kiosk',
      ],
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto(url);
    //await page.evaluate('document.documentElement.webkitRequestFullscreen()');

    await page.waitFor(1000);
    await page.once('load', () => console.log('Page loaded!'));
    await page.screenshot({path: './screenshot.png'});

    console.log(page.getValue)

    await browser.close();
  })

  it('pupeteer2', async () => {
    console.log("テスト開始します")
    const puppeteer = require('puppeteer');
    const browser = await puppeteer.launch({
      headless: true,
      args: [
        // '--disable-infobars', // Removes the butter bar.
        // '--start-maximized',
         // '--start-fullscreen',
          '--window-size=1920,1080',
         // '--kiosk',
       ]
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    await page.goto('http://www.yahoo.co.jp');
    await page.waitFor(3000);
    
    await page.evaluate(() => console.log('hello', 5, {foo: 'bar'}));

    await page.screenshot({ path: './example.png' });

    // const searchValue = await page.$eval('#header');
    console.log("★");
    

    // await page.on('console', msg => {
    //   for (let i = 0; i < msg.args().length; ++i)
    //   console.log(`${i}: ${msg.args()[i]}`);
    // });
    await browser.close();
  }
)  

//   xit('---', () => {


//     m1 = new mo1.module1()
//     m1.getValue() /*?*/
//     spyOn(m1, 'getValue').and.returnValue({ a: 123, b: 456 });
//     m1.getValue(999) /*?*/
//     expect(m1.getValue).toHaveBeenCalled();

//     expect(m1.getValue).toHaveBeenCalledWith(999);

//     m1.getValue() /*?*/

//     m3 = new mo1.module3()
//     m3.getValue() /*?*/

//     console.log('xxxx')
//     var a = 1
//     a

//     //渡す前にモジュールの値を書き換えるサンプル
//     spyOn(m1, 'calc').and.returnValue(9999);
//     var parents = new mo1.Parents(m1)
//     parents.calc(2, 5) /*?*/

//     //内部のモジュールを強制的に書き換えるサンプル
//     var parents = new mo1.Parents(m1)
//     spyOn(parents.myModule1, 'calc').and.returnValue(12345);
//     console.log(parents.calcWithOwnModule(2, 5)) /*?*/

//     console.log(parents.calcWithOwnModule(3, 25)) /*?*/

//   });

//  xit('call fakeの実装サンプル。これを使えば、引数によって戻り値を変えることも出来る。', () => {
//     m1 = new mo1.module1()
//     m1.getValue() /*?*/
//     spyOn(m1, 'getValue').and.callFake(function (a, b, c) {
//       if (a == 'companyA') {
//         return 'this is company A' + b + c
//       } else if (a == 'companyB') {
//         return 'this is company B' + b + c
//       } else {

//         return 'this is unknown company'

//       }
//     })
//     m1.getValue('companyA', 'xxxxxe', 33233) /*?*/
//   })

  afterEach(function () {

  })





});
