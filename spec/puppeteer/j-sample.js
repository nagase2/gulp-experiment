var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var fs = require('fs');
'use strict';
describe('自動テストサンプル', function () {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 100000;
    it('puppeteer', function () { return __awaiter(_this, void 0, void 0, function () {
        var puppeteer, url, browser, page, buffer;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    puppeteer = require('puppeteer');
                    url = process.env.URL || 'http://172.19.6.88:8080/jast-sample-develop/login';
                    return [4 /*yield*/, puppeteer.launch({
                            headless: false,
                            // See flags at https://peter.sh/experiments/chromium-command-line-switches/.
                            args: [
                                // '--disable-infobars', // Removes the butter bar.
                                // '--start-maximized',
                                // '--start-fullscreen',
                                '--window-size=1920,1080',
                                // '--kiosk',
                                '--no-sandbox',
                                '--disable-setuid-sandbox'
                            ]
                        })];
                case 1:
                    browser = _a.sent();
                    return [4 /*yield*/, browser.newPage()];
                case 2:
                    page = _a.sent();
                    _a.label = 3;
                case 3:
                    _a.trys.push([3, , 32, 34]);
                    // const cookies = await page.cookies();
                    //  await page.deleteCookie(cookies[0])
                    return [4 /*yield*/, page.setViewport({ width: 1920, height: 1080 })];
                case 4:
                    // const cookies = await page.cookies();
                    //  await page.deleteCookie(cookies[0])
                    _a.sent();
                    return [4 /*yield*/, page.goto(url, { waitUntil: "domcontentloaded" })];
                case 5:
                    _a.sent();
                    //await page.evaluate('document.documentElement.webkitRequestFullscreen()');
                    return [4 /*yield*/, page.once('load', function () { return console.log('Page loaded!'); })];
                case 6:
                    //await page.evaluate('document.documentElement.webkitRequestFullscreen()');
                    _a.sent();
                    return [4 /*yield*/, page.goto(url, { waitUntil: "domcontentloaded" })];
                case 7:
                    _a.sent();
                    return [4 /*yield*/, page.waitFor(1000)];
                case 8:
                    _a.sent();
                    //ログインフォームにIDとパスワードをセット
                    return [4 /*yield*/, page.type('input[name="username"]', "jc580")];
                case 9:
                    //ログインフォームにIDとパスワードをセット
                    _a.sent();
                    return [4 /*yield*/, page.type('input[name="password"]', "jc580")];
                case 10:
                    _a.sent();
                    //ログインボタンクリック
                    return [4 /*yield*/, page.click('#submit-button')
                        //await page.waitForSelector('#feature-content')
                        //メニューが表示されるまで待機する。
                    ];
                case 11:
                    //ログインボタンクリック
                    _a.sent();
                    //await page.waitForSelector('#feature-content')
                    //メニューが表示されるまで待機する。
                    return [4 /*yield*/, page.waitFor('#ui-id-3', { timeout: 10000 })];
                case 12:
                    //await page.waitForSelector('#feature-content')
                    //メニューが表示されるまで待機する。
                    _a.sent();
                    return [4 /*yield*/, page.click('#ui-id-3')]; //メニューをクリック
                case 13:
                    _a.sent(); //メニューをクリック
                    return [4 /*yield*/, page.waitFor(100)];
                case 14:
                    _a.sent();
                    return [4 /*yield*/, page.waitFor('#j2_1_anchor', { timeout: 5000 })];
                case 15:
                    _a.sent();
                    return [4 /*yield*/, page.click('#j2_1_anchor')];
                case 16:
                    _a.sent();
                    return [4 /*yield*/, page.waitFor(100)];
                case 17:
                    _a.sent();
                    return [4 /*yield*/, page.waitFor('#j2_2_anchor', { timeout: 5000 })];
                case 18:
                    _a.sent();
                    return [4 /*yield*/, page.click('#j2_2_anchor')];
                case 19:
                    _a.sent();
                    console.log("j2-2 anchor ");
                    return [4 /*yield*/, page.waitFor(100)];
                case 20:
                    _a.sent();
                    return [4 /*yield*/, page.waitFor('#j2_3_anchor', { timeout: 120000 })];
                case 21:
                    _a.sent();
                    return [4 /*yield*/, page.click('#j2_3_anchor')];
                case 22:
                    _a.sent();
                    //await page.click('a[href="/jast-sample-develop/xx/basicsample/crncymanagement/?doInitSearch=false"]')
                    console.log("リンクをクリックしました。");
                    return [4 /*yield*/, page.waitFor('#crncyCd', { timeout: 120000 })];
                case 23:
                    _a.sent();
                    console.log("入力します");
                    return [4 /*yield*/, page.focus('#crncyCd')];
                case 24:
                    _a.sent();
                    return [4 /*yield*/, page.waitFor(300)];
                case 25:
                    _a.sent();
                    //検索フィールドに通貨コードを入力する。  
                    return [4 /*yield*/, page.type('#crncyCd', 'EUR')];
                case 26:
                    //検索フィールドに通貨コードを入力する。  
                    _a.sent();
                    return [4 /*yield*/, page.waitFor(100)];
                case 27:
                    _a.sent();
                    //検索ボタン
                    return [4 /*yield*/, page.click('#f5')];
                case 28:
                    //検索ボタン
                    _a.sent();
                    //await page.goto('http://172.19.6.88:8080/jast-sample-develop/xx/basicsample/crncymanagement/');
                    // await page.waitFor('body > div.l-container > div > div > article > header > h1',{timeout: 120000})
                    //body > div.l-container > div > div > article > header > h1
                    //画面上の値を確認して、assertionを行う。
                    // await page.waitForNavigation({timeout: 60000, waitUntil: "domcontentloaded"});
                    return [4 /*yield*/, page.waitFor(1000)];
                case 29:
                    //await page.goto('http://172.19.6.88:8080/jast-sample-develop/xx/basicsample/crncymanagement/');
                    // await page.waitFor('body > div.l-container > div > div > article > header > h1',{timeout: 120000})
                    //body > div.l-container > div > div > article > header > h1
                    //画面上の値を確認して、assertionを行う。
                    // await page.waitForNavigation({timeout: 60000, waitUntil: "domcontentloaded"});
                    _a.sent();
                    return [4 /*yield*/, page.screenshot({ type: 'png' })];
                case 30:
                    buffer = _a.sent();
                    console.log('length:', buffer.length);
                    return [4 /*yield*/, fs.writeFile('output2.png', buffer)];
                case 31:
                    _a.sent();
                    return [3 /*break*/, 34];
                case 32:
                    console.log("ブラウザクローズします");
                    //console.log(page.getValue)
                    //await page.deleteCookie(cookies[0])
                    return [4 /*yield*/, browser.close()];
                case 33:
                    //console.log(page.getValue)
                    //await page.deleteCookie(cookies[0])
                    _a.sent();
                    return [7 /*endfinally*/];
                case 34: return [2 /*return*/];
            }
        });
    }); });
});
