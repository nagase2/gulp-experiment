

//時間のかかる処理を同期して実行する場合のサンプルを作成する

console.log("START!")

function func1Promise(msgnum,duration){
    return new Promise(function(resolve,reject){
        console.log("start of func1")
        setTimeout(function(){
           console.log("inside of func1...");
           resolve("msg: ##" + msgnum)
           
        },duration)
    })
}
function func2Promise(msgnum,duration){
    return new Promise(function(resolve,reject){
         setTimeout(function(){
           console.log("inside of func2...")
           resolve("reject #3")
        },duration)
    })
}



Promise.all([func1Promise(1,20),func2Promise(2,1001)]).then(function(msg){
    //すべてのPromiseからresolveが返ってきたとき（＝正常終了）のみ、
    //ここの処理が呼ばれる
    console.log("1全部おわった："+msg[0])
    console.log("2全部おわった："+msg[1])

}).then(()=>{

}).catch((error)=>{
    console.log("error#100")
})


console.log("--------------------------------")

function main5(){
    var global = {
        val1 : "init value",
        val2 :"init value2"}

    func1Promise().then(function(msg){
        console.log("#"+msg)
        global.val1 = "result of #1"
        return "#1"
    }).then(function(msg2){
        console.log("#2 "+msg2);
        global.val2 = "result of #2"
        return "#2"
    } ).then(function(msg2){
        console.log(msg2);
        return func1Promise()
    } ).then(function(msg2){
        console.log("#4"+msg2);
        return "#4"
    } ).then(function(msg2){
        console.log(msg2);
        console.log(global)
        return "#5"
    } )
    console.log("--before last promise---")
    func1Promise(9999,10).then((x)=>{
        console.log("PPP:",x)
    })
}

(function () {
　console.log("xxxxx")


})();




