const Json2csvParser = require('json2csv').Parser;
var fs = require('fs');
const fields = ['car.make', 'car.model', 'price', 'color'];
const myCars = [
  {
    "car": { "make": "Audi", "model": "A3" },
    "price": 40000,
    "color": "blue"
  }, {
    "car": { "make": "BMW", "model": "F20" },
    "price": 35000,
    "color": "black"
  }, {
    "car": { "make": "Porsche", "model": "9PA AF1" },
    "price": 60000,
    "color": "green"
  }
];

//ファイルが存在するかどうかチェック



const opts = { fields };
const json2csvParser = new Json2csvParser({ fields, header: true });
const csv = json2csvParser.parse(myCars);

console.log(csv);

//ファイルに追記する(非同期でOK)
//ファイルがすでに存在するかどうかによって、ヘッダの出力の要否を判断する。
fs.appendFile("test.log.txt", csv + "\n", (err) => {
  console.log(err)
})
