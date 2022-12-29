console.clear();
/* REDUCE - sutraukti/sumazinti/subendrinti/supaprastinti jei operacija nesudetinga
    procedura, kaip is saraso reiksmiu gauti viena galutine reiksme.
    REkomenduoja nepersistengti su reduce, kartais geriau paprastas ciklas
    daugiskaita -> vienaskaita */

const numbers = [10, 2, 8, 4, 6];

// su iprastu ciklu
/** uzdavynis. skaiciu suma */
let sum = 0;
for (const number of numbers) {
	sum += number;
}
console.log("FOR SUM:", sum);

// paprastas reduce - logika vietoje
const reduceSum = numbers.reduce((sum, number) => sum + number); /** pradzioje reduceSum=0; Reduce aprasymas
 = kreipiasi i sarasa (numbers)+, kvieciamas +.reduce((sum(cia galutine suma), number)reikia vidines funkcijos=>{}); metodas, jame f-ja stebi 2 dalykus 
 (1-besikeicianti suma ir 2-skaicius,kuri reikia prie tos sumos prideti. KITAS paaiskinimo budas 1-kintamasis, kuris 
atminty laiko galutine konstruojama reiksme ir 2-reiksme einanti is masyvo */
console.log("REDUCE SUM:", reduceSum);

function calcSum(sum, number) {
	return sum + number;
}

// paprastas reduce - logika isorineje funkcijoje
const reduceSumFunc = numbers.reduce(calcSum);
console.log("REDUCE SUM:", reduceSumFunc);

// KITI paprasti pavyzdziai

const reduceMinus = numbers.reduce((total, number) => total - number); /**10-2-8-4-6 */
console.log("REDUCE MINUS:", reduceMinus);

const reduceMulti = numbers.reduce((total, number) => total * number);
console.log("REDUCE MULTIPLY:", reduceMulti);

const reduceDiv = numbers.reduce((total, number) => total / number); /** 10/2/8/4/6 */
console.log("REDUCE DIVIDE:", reduceDiv);

// reduce, su nurodyta pradine akumuliatoriaus reiksme
const reduceSum2 = numbers.reduce((t, n) => t + n, 0); /** reducinama 18eilute. is pradziu .reduce(calcSum);
kai tave iskviecia reduce savo galutini ats(sum,(su papildoma reiksme)number)*/
console.log("REDUCE 2 SUM:", reduceSum2);

const reduceMinus2 = numbers.reduce((t, n) => t - n, 0); /** gale nurodoma norima pradine reiksme, siuo metu 0, bus 0-10-2-8-4-6*/
console.log("REDUCE 2 MINUS:", reduceMinus2);

const reduceMulti2 = numbers.reduce((t, n) => t * n, 1); /** daugybos atveju logiska nurodyt 1 */
console.log("REDUCE 2 MULTIPLY:", reduceMulti2);

const reduceDiv2 = numbers.reduce((t, n) => t / n, 1); /** t=total, n=number trumpiniai su arrow function */
console.log("REDUCE 2 DIVIDE:", reduceDiv2); /** neisivaizduoja kur naudojama */

// Patikrinam, ar iki galo isdalinome duota skaiciu "maziausiais" dalikliais?
/** uzduotis. masyvas turi pilnai padalinti 100 */
const atsGood = [2, 2, 5].reduce((t, n) => t / n, 100);
console.log(atsGood);

const atsGood2 = [2, 2, 2, 2, 2, 2, 2].reduce((t, n) => t / n, 128);
console.log(atsGood2);

const students = [
	{ name: "Petras", age: 99, isMarried: true },
	{ name: "Maryte", age: 88, isMarried: false },
	{ name: "Jonas", age: 77, isMarried: false },
	{ name: "Ona", age: 66, isMarried: true },
	{ name: "Simon", age: 7, isMarried: false },
	{ name: "Itoleta", age: 17, isMarried: true },
	{ name: "Alas", age: 47, isMarried: true },
	{ name: "Eliza", age: 2, isMarried: false },
];

const averageAge = students.reduce((t, s) => t + s.age, 0) / students.length; /** s=studetents */
console.log("Students:", parseInt(averageAge.toFixed(1))); /** iki 1 skaiciaus po kablelio */
console.log("Students:", +averageAge.toFixed(2)); /** iki antro skaiciaus po kableelio. su 0 be kableliu
+ konveertuoja string atgal i number */
console.log("Students:", parseFloat(averageAge.toFixed(1))); /**  */

console.log(+"5", parseInt("5"), parseFloat("5"));
console.log(+"3.1415", parseInt("3.1415"), parseFloat("3.1415"));
console.log(+"labas", parseInt("labas"), parseFloat("labas"));
console.log(+"labas3.1415", parseInt("labas3.1415"), parseFloat("labas3.1415"));
console.log(+"3.1415labas", parseInt("3.1415labas"), parseFloat("3.1415labas"));
console.log(
	+"3.1415labas3.1415",
	parseInt("3.1415labas3.1415"),
	parseFloat("3.1415labas3.1415")
);
