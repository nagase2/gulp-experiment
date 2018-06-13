'use strict'

//モジュールを個別でインポートする
import mo1 = require("./Module1")
import mo2 = require("./Module2")

//モジュールをまとめてインポートする(どっちかでよい)
import mob = require("./ModuleBundler")

console.log("合計は"+mo1.add(1,2));

mo1.sample2()
mo1.sample3()
console.log("変数:"+ (mo1.value2.val1+ mo1.value2.val2));
mo1.sample4()
mo2.sample5()



mob.mo1.sample2()
mob.mo1.sample3()
console.log("変数:"+ (mo1.value2.val1+ mo1.value2.val2));
mob.mo1.sample4()
mob.mo2.sample5()


// var myperson = new mob.mo2.Person.Person();

// console.log(myperson)

// function Person (){

// }
// Person.prototype.basicInfo ={
//     age: 22,
//     gender: "man",
//     name : "taro"
// }

// var person = new Person();

// console.log(person.basicInfo.name)

