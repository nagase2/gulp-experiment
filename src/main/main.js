"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Person_1 = require("./Person");
const $ = require("jquery");
var person = new Person_1.Person(1, "yoko");
$(() => {
    $('body').html('彼は' + person.name + 'です。' + 'そして' + person.age + '歳です');
});
