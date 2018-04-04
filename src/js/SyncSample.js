

//時間のかかる処理を同期して実行する場合のサンプルを作成する

console.log("START!")

function func1Promise(msgnum, duration) {
    return new Promise(function (resolve, reject) {
        console.log("start of func1")
        setTimeout(function () {
            console.log("inside of func1");
            resolve("msg: ##" + msgnum)
        }, 500)
    })
}
function func1Promise2(msgnum, duration) {
    return func1Promise(msgnum, duration).then((msg) => {
        return msg + "___?____"
    })
}

function func2Promise(msgnum, duration) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("inside of func2")
            resolve(true)
        }, duration)
    })
}

module.exports.func3 = function func3Promise(msgnum, duration) {
    return Promise.resolve(function () {
        setTimeout(function () {
            console.log("inside of func2")
            resolve(true)
        }, duration)
    })
}

async function main() {
    var result = await func1Promise2(123, 5000)

    console.log("###" + result)
}
main()

//例えばここで、関数を一つ被せて処理をした後にその結果を呼び出し元に返したい場合の処理



// Promise.all([func2Promise(1,400),func2Promise(2,3000)]).then(function(msg){
//     console.log("全部おわった："+msg[0])
//     console.log("全部おわった："+msg[1])
// })
// console.log("--------------------------------")

// var global = {
//     val1 : "init value",
//     val2 :"init value2"}

// func1Promise().then(function(msg){
//     console.log("#"+msg)
//     global.val1 = "result of #1"
//     return "#1"
// }).then(function(msg2){
//     console.log("#2 "+msg2);
//     global.val2 = "result of #2"
//     return "#2"
// } ).then(function(msg2){
//     console.log(msg2);
//     return func1Promise()
// } ).then(function(msg2){
//     console.log("#4"+msg2);
//     return "#4"
// } ).then(function(msg2){
//     console.log(msg2);
//     console.log(global)
//     return "#5"
// } )

