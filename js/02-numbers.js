/* 
Skaiciai (numbers):
- tikri/netikri (skaiciaus tipo, bet ne skaicius)
    - Infinity
    - NaN (not-a-number)
- sveikieji/desimtainiai
- teigiami/neigiami

Inicijavimas:
const - nekeiciama reiksme (defaut) tipo konstanta?
let - kintama reiksme (sekanti tinkama reiksme, jei netiko const)
var- niekada nenaudot (seniena)

 SUTRUMPINIMAI:
    x = x + 2 -> x += 2
    x = x - 2 -> x -= 2
    x = x * 2 -> x *= 2
    x = x / 2 -> x /= 2
    x = x % 2 -> x %= 2
    jei padidinti reikia tik 1 vienetu, tai:
    x = x + 1 -> x += 1 -> x++
    x = x + 1 -> x += 1 -> ++x
    jei sumazinti reikia tik 1 vienetu, tai:
    x = x - 1 -> x -= 1 -> x--
    x = x - 1 -> x -= 1 -> --x

*/

const PI = 3.14;
console.log(PI);

let wallet = 0; /* cons ir let  raktazodziai pries kintamojo rasomi tik inicijavimo procese*/
console.log(wallet);
wallet = 5; /* kai jau inicijuota  2-3 kitus kartus inicijuoti nebereikia, priskiriama tik nauja reiksme*/
console.log(wallet);
wallet = 15; 
console.log(wallet);

const negative = -888;
console.log(negative);

const maxNumber = Infinity; /* infinity yra skaiciaus tipas,bet nera skaicius, nes begalybe yra savoka/terimnas*/
const minNumber = -Infinity;

console.log(maxNumber, minNumber);
console.log(0, 1, 2, 3.14); /* su kableliu atskiriamos reiksmes*/

console.log(NaN);

// kintamuju uzvadinimas
const vienas = 1;
const antrasSkaicius = 2;
const PVM = 21; /* abriavaturas pvz kaip PVM galima rasyti didziosiom*/

console.log('-------------'); /** viengubose kabutese rasomas tekstas */
// primityvios matematines operacijos

const a = 5; /* kintamuosius/pavadinimus stengtis aprasyt aiskiai ir trumpai lakoniskai*/
const b = 7;

// suma
const suma = a + b;
console.log(a, b, suma);

// skirtumas
const skirtumas = a - b;
console.log(a, b, skirtumas);

// dalmuo
const dalmuoAB = a / b;
const dalmuoBA = b / a;
console.log(a, b, dalmuoAB);
console.log(b, a, dalmuoBA);

// sandauga
const sandauga = a * b;
console.log(a, b, sandauga);

// liekana
const liekanaAB = a % b;
const liekanaBA = b % a;
console.log(a, b, liekanaAB);
console.log(b, a, liekanaBA);

// laipsnis
// 5 ** 7 = 5 * 5 * 5 * 5 * 5 * 5 * 5 -> penki pakelta septintuoju
const laipsnisAB = a ** b;
// 7 ** 5 = 7 * 7 * 7 * 7 * 7 -> septyni pakelta penktuoju
const laipsnisBA = b ** a;
console.log(a, b, laipsnisAB);
console.log(b, a, laipsnisBA);

console.log('---------------');
const p1 = 10;
const p2 = 2;
const p3 = 8;
const p4 = 4;
let pazymiuSuma = 0;
console.log('pazymiu suma:', pazymiuSuma);
pazymiuSuma = pazymiuSuma + p1;
console.log('pazymiu suma:', pazymiuSuma);
pazymiuSuma = pazymiuSuma + p2;
console.log('pazymiu suma:', pazymiuSuma);
pazymiuSuma = pazymiuSuma + p3;
console.log('pazymiu suma:', pazymiuSuma);
pazymiuSuma = pazymiuSuma + p4;
console.log('pazymiu suma:', pazymiuSuma); /*mutavimas, keitimas yra esminis dalykas */

console.log('---------------');  /** kodo optimizavimas zumazinimas */
const islaida1 = 10;
const islaida2 = 20;
const islaida3 = 25;
const islaida4 = 35;
let saskaita = 100;
saskaita -= islaida1;   /** saskaita = saskaita - saskaita1; 
taip pat kaip pvz x = x -10;  -= -->minus i vidu*/
console.log('isleidau:', islaida1, '; saskaitoje liko:', saskaita);
saskaita -= islaida2;
console.log('isleidau:', islaida2, '; saskaitoje liko:', saskaita);
saskaita -= islaida3;
console.log('isleidau:', islaida3, '; saskaitoje liko:', saskaita);
saskaita -= islaida4;
console.log('isleidau:', islaida4, '; saskaitoje liko:', saskaita);

console.log('---------------');
let index = 0;  /** uzduotis padidinti vienetu. const keiciam i let */
/** galima uzrasyti index++; lygu index += 1; */

console.log('index:', index++); /** du pliusai/minusai esantys uz kintamojo pirma reiksme spausdina nuo 0 . paskutine (sesta) reiksme panaudoja (ji yra) taciau neatspausdina */
console.log('index:', index++);
console.log('index:', index++);
console.log('index:', index++);
console.log('index:', index++);
console.log('index:', index++);

let index2 = 0;
console.log('index2:', --index2); /** du pliusai/minusai esantys pries kintamojo pirma padidina/sumazina reiksme +1/-1 ir tik po to isspausdina */
console.log('index2:', --index2);
console.log('index2:', --index2);
console.log('index2:', --index2);
console.log('index2:', --index2);
console.log('index2:', --index2);