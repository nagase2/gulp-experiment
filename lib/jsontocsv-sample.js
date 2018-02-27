var json2csv = require('json2csv');
//var fields = ['car', 'price', 'color'];
var fields = ['car', 'color','owner.age','price'];
var myCars = [
  {
    "car": "Audi",
    "price": 40000,
    "color": "blue"
  }, {
    "car": "BMW",
    "price": 35000,
    "color": "black",
    "owner":{name:"nagase",age:44}
  }, {
    "car": "Porsche",
    "price": 60000,
    "color": "green"
  }
];
var tsv = json2csv({ data: myCars, fields: fields, del: '\t' });
console.log(tsv)

console.log('--------------------------')

json2csv({ data: myCars, fields: fields }, function (err, csv) {
  if (err) console.log(err);
  console.log(csv);
});

