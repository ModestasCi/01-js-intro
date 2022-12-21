console.clear();
const n1 = 7;
const n2 = 5;

// function declaration
function sum(a, b) { /** senasis uzrasymo budas */
	return a + b;
}
console.log(`${n1} + ${n2} = ${sum(n1, n2)}`);

// function expression
// kintamajam priskirta anonimine funkcija. Anonimine, nes tarpe funkcija yra neuzvardyta
// t.y. space tarpo vietoje --> function (a, b)
const minus = function (a, b) { /** cia minus priskiria, kad atsimintu ne reiksme o logika, siuo atveju minusavima */
	return a - b;
};
console.log(`${n1} - ${n2} = ${minus(n1, n2)}`);

// arrow function(rodikline funkcija)
const multiply = (a, b) => {
	return a * b;
};
console.log(`${n1} * ${n2} = ${multiply(n1, n2)}`);

// arrow function evoliucija is virsutiniu pvz
// !!!jeigu logikos bloke yra tik 1 statement'as!!!
// galima nerasyti {} ir return (jei trint, tai trint butinai abu)
const divide = (a, b) => a / b;
console.log(`${n1} / ${n2} = ${divide(n1, n2)}`);

// arrow function sekanti evoliucija
// jeigu parametru bloke yra tik !!!1 parametras!!!!
// galim nerasyti ()
// negalima naudoti, jei skliaustuote yra "kazkas keisto" 👀
const sqrt = a => a * a;
console.log(`${n1} ** 2 = ${sqrt(n1)}`); /** cia 2-kuriuo laipsniu keliama */

function hi() { 
	return "Hi there 👋";
}

const hello = () => "Hello kitty 🐱"; /** cia itin svarbu eiliskumas kodo */

console.log(hi());
console.log(hi());
console.log(hi());

console.log(hello());
console.log(hello());
console.log(hello());
