
/**
 * JSONの中からデータを探し、その項目を置き換えるサンプル
 */
var _ = require('underscore')


const myCars = [
    {
      "id": "id001",
      "car": { "make": "Audi", "model": "A3" },
      "price": 40000,
      "color": "blue"
    }, {
     "id":"id002",
      "car": { "make": "BMW", "model": "F20" },
      "price": 35000,
      "color": "black"
    }, {
      "id":"id003",
      "car": { "make": "Porsche", "model": "9PA AF1" },
      "price": 60000,
      "color": "green"
    }
  ];
 
  
  //id002のデータのpriceを77777に置き換える。
  let oneData = _.find(myCars,function(list){return list.id == "id002"} )

  console.log("oneData:", oneData)
  oneData.price=77777
  oneData.color="Gold"

  //置き換えた結果をコンソールに出力する。（実際はファイルに保存する）
  console.log(myCars)
