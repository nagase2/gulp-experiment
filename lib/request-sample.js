/**
 * 動機処理のエラーハンドリングのサンプル
 */

var request = require('request');

var options = {
    url: 'https://api.github.com/repos/request/request',
    headers: {
        'User-Agent': 'request'
    }
};

function requestfunc() {
    return new Promise((resolve, reject) => {
        request(options, function (error, response, body) {
            if (error) {
                console.log("エラーが発生しました。")
                reject("errorrr")
                console.log(body)
                resolve(info.owner)
            }
            else if (!error && response.statusCode == 200) {
                var info = JSON.parse(body);
                // console.log(info.owner)
                resolve(info.owner)
            } else {
                //ステータスコードをみて、200以外ならここに遷移する
                console.log("received status code is " + response.statusCode)
                try {
                    var info = JSON.parse("<a></a>");
                } catch (e) {
                    //console.log(e)
                    reject({ error: "エラーですよ" })
                }
            }
        })
    })
        .then((result) => {
            // console.log("結果は::", result)
            return result
        })
}

/**
 * メインロジック。同期で実行する。
 */
async function main() {
    var result = await requestfunc()
        //resolveが呼ばれた場合はここに遷移駿。受け取った値に何か処理を追加したい場合はここに処理を追加。
        //最後にreturnで値を返すことを忘れない。忘れるとresultに値が入らない。
        // .then((x) => {
        //     console.log("xxxxxx")
        //     return x
        // })
        .catch((x) => {
            //rejectが呼ばれた場合はここに遷移する。ここにエラー処理を記述する。
            //最後にreturnでresultにいれたい値を指定する。何も指定しなかった場合はundefinedとなる
            //console.log("エラーメッセージ:", x)
            return x
        })

    console.log("プログラム終了:", result)


}

//スタート
main()



