//コンソール
console.log('message is 1');

console.log('messcddage is 2');
document.write('this is javascript!!!!<br/><br/>');

sample('valu223e');

function sample(sampleValue1){
    console.log(sampleValue1);
}


function doGet() {
    
    var cc_response = UrlFetchApp.fetch("https://coincheck.com/api/ticker");
    var cc_json = JSON.parse(cc_response.getContentText());
    var bf_response = UrlFetchApp.fetch("https://api.bitflyer.jp/v1/ticker");
    var bf_json = JSON.parse(bf_response.getContentText());
    var zf_response = UrlFetchApp.fetch("https://api.zaif.jp/api/1/ticker/btc_jpy");
    var zf_json = JSON.parse(zf_response.getContentText());
    var bt_response = UrlFetchApp.fetch("https://www.btcbox.co.jp/api/v1/ticker/");
    var bt_json = JSON.parse(bt_response.getContentText());
    var qn_response = UrlFetchApp.fetch("https://api.quoine.com/products/5");
    var qn_json = JSON.parse(qn_response.getContentText());
    var bi_response = UrlFetchApp.fetch("https://public.bitbank.cc/btc_jpy/ticker");
    var bi_json = JSON.parse(bi_response.getContentText());
 
    
}