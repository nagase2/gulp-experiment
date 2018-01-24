//コンソール
'use strict'
console.log('message is 1');


module.export = function sample(sampleValue1){
    console.log(sampleValue1);
}

var sample2 = function(){
  console.log("モジュール2がよばれたぞ");
}
module.exports.sample2 = sample2;

function sample3_function(){
    console.log("モジュール3がよばれたぞ");
  }
  module.exports.sample3 = sample3_function;

module.exports.sample4 = function(){
    console.log("モジュール4が呼ばれたぞ")
}


// cal.js
function add(a,b){
    return a + b;
};
module.exports.add = add;
module.exports.value2 = { val1 : 1, val2 :2}




