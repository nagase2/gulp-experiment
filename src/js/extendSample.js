
var _ = require("underscore")


var val1 = _.extend({name: 'moe'}, {age: 50,address:'nagoya'},function func1(){return 123});
var val2 = _.extend(val1, {address:'tokyo'},function func1(){return 123});

console.log(val2.func1)
console.log(val1)
console.log(val2)

var val3 = _.pick({name: 'moe',age: 50,address:'nagoya',gender:'male'},'name','age')
console.log('val3 ',val3)

var val4 = _.pick([
    {name: 'moe',age: 50,address:'nagoya',gender:'male'},
    {name: 'moe',age: 50,address:'nagoya',gender:'male'}
],'name','age')
console.log('val4 ',val4)

console.log(val1)
console.log(val2)
    