// console.clear();
// DESTRUKTURIZAVIMAS - destructuring (atbulinis uzrasymas kintamuju)
// naudojamas sumazinti kodo apimti
const pazymiai = [10, 9, 8, 7, 6];
const pirmas = pazymiai[0];
const antras = pazymiai[1];
const ketvirtas = pazymiai[3];
console.log(pirmas);
console.log(antras);
console.log(ketvirtas);

console.log("----");
const marks = [10, 2, 8, 4, 6];
const [first, second, third] = marks; /** istraukia is masyvo reiksme skaiciuojant nuo 1, ne nuo 0 */
console.log(first);
console.log(second); /** Jurgita isspausdino praleidusi antra, bet tada reikia irasyti space tarpa tarp kableliu. destytojui pataria nenaudot taip */
console.log(third);

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
const numbers = [1, 2, 3];
const numbers2 = [...numbers, ...numbers]; /** spread --->...numbers <---pateikia visas masyve esancias reiksmes*/
const numbers3 = [...numbers2, 999, ...numbers2];
console.log(numbers);
console.log(numbers2);
console.log(numbers3);

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
