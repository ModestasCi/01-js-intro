/*
    FUNCTION - pasikartojancios/perpanaudojamos logikos rinkinys/blokas
    function pavadinimas (argumentai/parametrai) {
        argumentu patikrinimas/validacija
        logika, kuri pagamina rezultata
        rezultato patikrinimas
        grazinama reiksme
    }
*/

function suma(a = 500, b = 13) {
    return a + b;
}

const n1 = 7;
const n2 = 500;
const n3 = 13;

const s12 = suma(n1, n2); /** cia s12 yra 1 ir 2 kintamojo suma */
const s21 = suma(n2, n1);
const s13 = suma(n1, n3);
const s23 = suma(n2, n3);

console.log(s12, s21);
console.log(s13);
console.log(s23);

console.log('-----------------');

const savikaina1 = 10;
const savikaina2 = 20;
const savikaina3 = 100;

/** function galutineKaina(savikaina, mokestis, pelnas) */
function coof(proc) { 
    return 1 + proc / 100;
}

function salesPrice(cost) {
    const tax = 20;  /** PVM */
    const margin = 30; /** pelno dalis */
    const taxCoof = coof(tax);
    const marginCoof = coof(margin); /** coof - koeficientas */
    return cost * taxCoof * marginCoof;
}

const price1 = salesPrice(savikaina1); /** salesPrice-galutine kaina */
const price2 = salesPrice(savikaina2);
const price3 = salesPrice(savikaina3);

console.log(savikaina1, '-->', price1);
console.log(savikaina2, '-->', price2);
console.log(savikaina3, '-->', price3);

console.log('---------------');

const student1 = [10, 2, 8, 4, 6];
const student2 = [6, 7, 8, 9, 10];
const student3 = [1, 3, 5, 7, 9];

function listAverage(marks) {
    const count = marks.length;
    let sum = 0;
    let index = 0;

    sum += marks[index++];
    sum += marks[index++];
    sum += marks[index++];
    sum += marks[index++];
    sum += marks[index++];

    return sum / count;
}

const average1 = listAverage(student1); // 6
const average2 = listAverage(student2); // 8
const average3 = listAverage(student3); // 5

console.log(average1);
console.log(average2);
console.log(average3);