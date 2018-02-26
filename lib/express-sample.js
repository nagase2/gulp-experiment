
/* 1. expressモジュールをロードし、インスタンス化してappに代入。*/
var express = require("express");
var app = express();
var _ = require('underscore')

/* 2. listen()メソッドを実行して3000番ポートで待ち受け。*/
var server = app.listen(3000, function(){
    console.log("Node.js is listening to PORT:" + server.address().port);
});


// Hello world
app.get("/", function(req, res, next){
    console.log(req)
    //console.log(res)
    res.send("hello world <a href='/top?value1=123&value2=456'>top</a>");
});

// 受け取ったリクエストの内容を画面に表示する
app.get("/top", function(req, res, next){
    console.log("received query was", req.query)
    //console.log(res)
    var resJson = _.extend({headers:req.headers},{query:req.query})
    // res.json(resJson)
    res.send("<pre>"+JSON.stringify(resJson,null, "  ")+"</pre>")
});

app.get("/getjson", function(req, res, next){
    console.log("received query was", req.query)
    //console.log(res)
    var resJson = _.extend({headers:req.headers},{query:req.query})
    // res.json(resJson)
    res.json({foo:"value1",bar:"value2"})
});



// /**
//  * 二つ目のサーバ
//  */
// var app2 = express();
// /* 2. listen()メソッドを実行して3000番ポートで待ち受け。*/
// var server2 = app2.listen(3001, function(){
//     console.log("Node.js is listening to PORT:" + server2.address().port);
// });


// // Hello world
// app2.get("/", function(req, res, next){
//     console.log(req)
//     //console.log(res)
//     res.send("server2");
// });