console.clear();
/* FILTER - palieka tik norimas reiksmes */

/** uzduotis. gauti neigiamus skaicius senuoju budu */
const numbers = [-1, 5, -7, 3.5, 10];
const negativeNumbers = [];
for (const number of numbers) {
	if (number < 0) {
		negativeNumbers.push(number); /** i negativeNumbers ipushinama number */
	}
}
console.log(numbers);
console.log(negativeNumbers);

/** uzduotis. gauti teigiamus skaicius. filter analogiskai kaip map veikia
 * Filter veikia kaip ciklas, kuris eis per nurodyta masyva(siuo atveju numbers) ir paleidines reiksmes per paslepta IFa
 * n cia number trumpinys*/
const positiveNumbers = numbers.filter((n) => n > 0);
console.log(positiveNumbers);

/** uzduotis. išfiltruoti tik pilnamečius */
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
const pilnameciai = students.filter((s) => s.age >= 18);
console.log(pilnameciai);

/** uzduotis. reikia kurie pilnameciai ir vede */
function isMarriedAndAdult(student) {
	if (student.age < 18) {
		return false;
	}
	if (!student.isMarried) { /** jei nera vedes */
		return false;
	}
	return true;
}

/** REFAKTORING 1-kodo uzrasymas paprastesniu budu, uzimanciu maziau vietos */
function isMarriedAndAdult2(student) {
	if (student.age < 18 || !student.isMarried) { /** su arba || */
		return false;
	}
	return true;
}

/** REFAKTORING 2 */
function isMarriedAndAdult3(student) {
	if (student.age >= 18 && student.isMarried) { /** su ir && */
		return true;
	}
	return false;
}

/** REFAKTORING 3 */
function isMarriedAndAdult4(student) {
	return student.age >= 18 && student.isMarried; /** grazinti(return) tiesiogini atsakyma */
}

/** REFAKTORING 4 */
const isMarriedAndAdult5 = (s) => s.age >= 18 && s.isMarried; /** vietoj student - s sutrumpinimas */

const vedePilnameciai = students.filter(isMarriedAndAdult);
console.log(vedePilnameciai);
const vedePilnameciai2 = students.filter(isMarriedAndAdult2);
console.log(vedePilnameciai2);
const vedePilnameciai3 = students.filter(isMarriedAndAdult3);
console.log(vedePilnameciai3);
const vedePilnameciai4 = students.filter(isMarriedAndAdult4);
console.log(vedePilnameciai4);
const vedePilnameciai5 = students.filter(isMarriedAndAdult5);
console.log(vedePilnameciai5);

/** uzduotis. tik susituokusiu vardai */
const onlyNamesOfMarried = students /** galima i viena eilute, bet toks CHAINinimas yra geriau skaitomas*/
	.filter((s) => s.isMarried) /** pirma atsifiltruojama ir tik po to MAPinama */
	.filter((s) => s.age >= 18)
	.map((s) => s.name); /** MAPinama tik po atsifiltravimo */
console.log(onlyNamesOfMarried);

/** uzduotis. susituokusiu skaiciu*/
const onlyMarriedCount = students.filter((s) => s.isMarried).length;
console.log(onlyMarriedCount);

/** uzduotis. tik vedusiu studentu vardai
 * sis kodas dvigubai efektyvesnis, greiciau veikiantis, maziau atminties vartojantis nei
 * 82-86eil. nes maziau ciklu reikia, siuo atveju tik 1ciklas*/
const onlyFans = [];
for (const student of students) {
	if (student.isMarried && student.age >= 18) {
		onlyFans.push(student.name);
	}
}
console.log(onlyFans);
