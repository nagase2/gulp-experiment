//コンソール
'use strict'
console.log('message is 1');


export function sample(sampleValue1:string) {
    console.log(sampleValue1);
}

export function sample2() {
    console.log("モジュール2がよばれたぞ");
}

export function sample3() {
    console.log("モジュール3がよばれたぞ");
}

export function sample4() {
    console.log("モジュール4が呼ばれたぞxxx")
}


// cal.js
export function add(a: number, b: number) {
    return a + b;
};

export let value2 = { val1: 1, val2: 2 }




