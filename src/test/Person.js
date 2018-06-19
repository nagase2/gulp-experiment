"use strict";
exports.__esModule = true;
var assert = require("power-assert");
var Person_1 = require("../js/Person");
describe('PersonTest', function () {
    it('コンストラクタのテストです', function () {
        var person = new Person_1.Person(10, 'hiro');
        assert.equal(person.id, 10);
        assert.equal(person.age, 99);
        assert.equal(person.name, 'hiro');
    });
    it('コンストラクタのテスト2です', function () {
        var person = new Person_1.Person(10, 'hiro');
        assert.equal(person.id, 10);
        assert.equal(person.age, 99);
        assert.equal(person.name, 'hiro');
    });
    it('コンストラクタのテスト3です', function () {
        var person = new Person_1.Person(1000000, 'hiro');
        assert.equal(person.id, 1000000);
        assert.equal(person.age, 99);
        assert.equal(person.name, 'hiro');
    });
});
