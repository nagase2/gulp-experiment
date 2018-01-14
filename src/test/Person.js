"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const assert = require("power-assert");
const Person_1 = require("../main/ts/Person");
describe('PersonTest', () => {
    it('コンストラクタのテストです', () => {
        const person = new Person_1.Person(10, 'hiro');
        assert.equal(person.id, 10);
        assert.equal(person.age, 99);
        assert.equal(person.name, 'hiro');
    });
    it('コンストラクタのテスト2です', () => {
        const person = new Person_1.Person(10, 'hiro');
        assert.equal(person.id, 10);
        assert.equal(person.age, 99);
        assert.equal(person.name, 'hiro');
    });
    it('コンストラクタのテスト3です', () => {
        const person = new Person_1.Person(1000000, 'hiro');
        assert.equal(person.id, 1000000);
        assert.equal(person.age, 99);
        assert.equal(person.name, 'hiro');
    });
});
//# sourceMappingURL=Person.js.map