import {Person} from './Person';
import * as $ from 'jquery';

var person: Person = new Person(1, "yoko");
$(() => {
    $('body').html('彼は' + person.name + 'です。' + 'そして' + person.age +'歳です');
});

function myfunc(str:string){

    return "test value";
}