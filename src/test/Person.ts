
import * as assert from 'power-assert'
import { Person } from '../src/js/Person';

describe('PersonTest', () => {
    it('コンストラクタのテストです', () => {
        const person: Person = new Person(10, 'hiro');
        assert.equal(person.id, 10);
        assert.equal(person.age, 99);
        assert.equal(person.name, 'hiro');
    });
    it('コンストラクタのテスト2です', () => {
        const person: Person = new Person(10, 'hiro');
        assert.equal(person.id, 10);
        assert.equal(person.age, 99);
        assert.equal(person.name, 'hiro');
    });
    it('コンストラクタのテスト3です', () => {
        const person: Person = new Person(1000000, 'hiro');
        assert.equal(person.id, 1000000);
        assert.equal(person.age, 99);
        assert.equal(person.name, 'hiro');

    });
});


