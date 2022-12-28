console.clear();
// DESTRUKTURIZAVIMAS - destructuring (atbulinis uzrasymas kintamuju)
// naudojamas sumazinti kodo apimti. Ypatingai naudojant objektams
const pazymiai = [10, 9, 8, 7, 6];
const pirmas = pazymiai[0];
const antras = pazymiai[1];
const ketvirtas = pazymiai[3];
console.log(pirmas);
console.log(antras);
console.log(ketvirtas);
console.log("----");

const marks = [10, 2, 8, 4, 6];
const [first, second, third, fourth] = marks; /** istraukia is masyvo reiksme skaiciuojant nuo 1, ne nuo 0 */
console.log(first);
console.log(second); /** Jurgita isspausdino praleidusi antra, bet tada reikia irasyti space tarpa tarp kableliu. destytojui pataria nenaudot taip */
console.log(fourth);
console.log("----");

const petras = ["Petras", 69, true];
const vardas = petras[0];
const amzius = petras[1];
const arVedes = petras[2];
console.log(vardas, amzius, arVedes);

const ona = ["Ona", 87, false]; /** destrukturizuotas optimizuotas masyvas */
const [name, age, isMarried] = ona; /** Ona - cia pasirinktas destrukturizuojamas objektas */
console.log(name, age, isMarried);

const car = { /** objekto destrukturizavimas */
	brand: "Tesla",
	model: "S",
	color: "red",
};
const { color, model } = car;
console.log(color, model);

// SPREAD  mazejancia tvarka isspausdina(tik masyvams ir objektams galioja)
// naudojamas sumazinti kodo apimti
const numbers = [1, 2, 3]; /** cia aprasomas pirminis duomenu rinkinys */
const numbers2 = [...numbers, ...numbers]; /** spread --->...numbers <---pateikia visas masyve esancias reiksmes*/
/** su const numbers2 sukuriamas antras duomenu rinkinys. is esmes padaroma jo kopija. išSPREADinant pirmas,antras...n-tas reiksmes */
const numbers3 = [...numbers2, 999, ...numbers2];
console.log(numbers);
console.log(numbers2);
console.log(numbers3);

// SPREAD - išrašymas/iškopijavimas
const person = {
	name: "Maryte",
	age: 88,
	isMarried: true,
	childrenCount: 5,
	phone: 2148562548,
	address: "Gatves g 5, Miestas",
	favoriteColor: "yellow",
	height: 200,
	eyes: "👀",
};
console.log(person);

const person2 = { /** su spread(...person) papildomai prideda seniau aprasyta reiksme(car: {})*/
	...person, /** spred naudojamas, kad nerasyt/nekopijuot daug besikartojancio kodo */
	car: {
		...car,
		price: 100000, /** iterpiam i trecia sluoksni? nauja kintamaji su nurodyta reiksme */
	},
	happy: true, /**dar viena papildomas kintamasis pridetas */
};

console.log(person2);
console.log('-----------')
console.log(person2.car.brand); /** istraukia brand is kito kodo */

const { childrenCount, happy, favoriteColor } = person2;
console.log(childrenCount, happy, favoriteColor);

console.clear();
const a = ['a', 'aa'];
const b = ['b', 'bb'];
const c = ['c', 'cc'];

/** uzduotis isspausdint masyvo elementu suma */
const doubleABC = [...a, 111, ...b, ...c]; /** išSPREADint galima ką nori. Svarbu i masyva SPREADint masyva, i OBJECTa SPREADint OBJECTa . Ksd isliktu tas pats duomenu tipas*/
const doubleCBA = [...c, ...b, 123, ...a]; /** eiliskumo keitimas */
console.log(doubleABC);
console.log(doubleCBA);

console.log('-----------')
// const oa = { a: 'a' }; /** oa =pirmas OBJECTas. a: =OBJECTo raktazodis */
// const ob = { b: 'b' };  /** b: =key value */
// const oc = { c: 'c' }; 
// /** uzduotis isspausdint */
// const oABC = { ...oa , ...ob, ...oc}; /** OBJECTe, kai SPREADini eiliskumas absoliuciai nesvarbus */
// console.log(oABC);

const oa = { a: 'a', aa: 'aa' }; 
const ob = { b: 'b', bb: 'bb' }; 
const oc = { c: 'c', cc: 'cc' };
/** antra uzduotis isspausdint */
const oABC = {...oa, gg: 'gg', ...oc, ...ob, cc: 'keiciam cc', cc: 'rewrite keiciam cc'}; /** su nauju cc: overRidinau(ant virsaus) 
isSPREADinta info (t.y. ...oc). OBJECTas negali tureti dvieju vienodu raktazodziu (t.y. cc) 
su vienodu pavadinimu. VISI raktazodziai turi buti unikalus. laimi paskutinis */ 
console.log(oABC.cc); /** kai reikia paimti OBJECTe esancia reiksme imam OBJECTa oABC ir 
raktazodi cc. eiliskumas absoliuciai nesvarbus, iterpti reiksme galima betkada*/
console.log(oABC.gg);

const user = {
	name: 'Username',
	password: 'password123'
};
console.log(user);

// const user2 = { ...user };
// user2.name = 'Petras';/** jei nori padaryt OBJECTo user kopija ir pakeist tik dali info reikia
//  kreiptis i user2 ir pakeist(overridint) ji norimu*/
const user2 = { ...user, name: 'Petras' }; /** OPTIMALESNIS overridinimo budas */
console.log(user2);
console.log(user2.name);

