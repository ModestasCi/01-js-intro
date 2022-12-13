/*
    TYPEOF - nustato reiksme tipa
*/

const n = NaN; // yra number (999, -999)
const s = ''; // string (belekoks tekstas)
const b = false; // boolean

const nType = typeof n;
const sType = typeof s;
const bType = typeof b;

console.log(n, nType);
console.log(s, sType);
console.log(b, bType);

//pavyzdziai:
console.log(typeof 5);
console.log(typeof -5);
console.log(typeof 3.14);
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(typeof NaN);
console.log(typeof '');
console.log(typeof 'a');
console.log(typeof 'aewaertrhyfg');
console.log(typeof true);
console.log(typeof false);

const marks = [10, 2, 8];
const marksType = typeof marks;
console.log(marks, marksType);
//objects pvz. esminis yra pirminis dalykas, siuo atveju masyvas(array)
// typeof array mato kaip object
console.log(typeof []);
console.log(typeof [1]);
console.log(typeof [1, -8]);
console.log(typeof ['']);
console.log(typeof ['', 'dewfd']);
console.log(typeof ['', true, 5]);

console.log({}, typeof {});
console.log({ age: 99 }, typeof { age: 99 });