console.clear();
/*
    FOR - ciklas (en. loop)
    kartojame norima logika N kartu arba iki kol reikia (reikalinga patikrinimo salyga)
    for () {
        logika, kuria reikia kartoti N kartu
    }
*/

// isspausdinti skaicius nuo 0 iki 5
for (let i = -10; i <= 5; i++) {
	console.log("dirbu...", i);
}
// isspausdinti skaicius nuo 5 iki 10
for (let i = 5; i <= 10; i++) {
	console.log("skaicius:", i);
}
// isspausdinti skaicius nuo -10 iki -5
for (let i = -10; i <= -5; i++) {
	console.log("skaicius:", i);
}
// isspausdinti skaicius nuo 10 iki 5
for (let i = 10; i >= 5; i--) {
	console.log("skaicius:", i);
}
console.clear();

const marks = [10, 2, 8, 4, 6, 10];
const count = marks.length;
let sum = 0;

for (let i = 0; i < count; i++) {
	// jei i=0; i <= count, i++ - tada NanN, kai nurodytas
	// netikslus masyvo kiekis
	//i < count --> kiek kartu
	// ciklas turi eiti.pvz iki 5, 10 ir t.t.
	// taip pat kaip marks.length
	sum += marks[i];
	// console.log(marks); isspausdina visa pazymiu masyva
	// console.log(marks, marks[i]); isspausdina visa masyva su kiekvienu pazymiu
	console.log(i, "->", marks[i], "=>", sum); // i(deksas) (nuo 0 iki 4)
}

const average = sum / count;
console.log("Pazymiu vidurkis:", average);

console.log("---------------");

// neoptimalus kodo aprasymas
const petras = [10, 8, 6];
const count2 = petras.length;
let sum2 = 0;
for (let i = 0; i < count2; i++) {
	sum2 += petras[i];
}
console.log("Petro vidurkis:", sum2 / count2);

// neoptimalus kodo aprasymas
const maryte = [9, 7, 5, 10];
const count3 = maryte.length;
let sum3 = 0;
for (let i = 0; i < count3; i++) {
	sum3 += maryte[i];
}
console.log("Marytes vidurkis:", sum3 / count3);
console.log("---------------");

function marksAverage(marksArray) {
	// console.log(marksArray); isspausdina kiekvieno visus pazymius
	let sum = 0;
	for (let i = 0; i < marksArray.length; i++) {
		sum += marksArray[i];
	}
	return sum / marksArray.length;
}

const student1 = {
	name: "Jonas",
	marks: [2, 4, 6],
};
const student2 = {
	name: "Ona",
	marks: [4, 6, 8, 10],
};
const student3 = {
	name: "Aloyzas",
	marks: [6, 8, 10, 7, 3],
};
const student4 = {
	name: "Marijona",
	marks: [], // nes pazymiu skaicius yra 0, del to NaN
};
const vidurkis1 = marksAverage(student1.marks); // <--- vietoj const vidurkis1 = 0;
const vidurkis2 = marksAverage(student2.marks); // student2 - personalizuoti duoenys(objektai, kurie apraso pilnai visa studenta)
const vidurkis3 = marksAverage(student3.marks);
const vidurkis4 = marksAverage(student4.marks);
console.log(`${student1.name} pazymiu vidurkis yra ${vidurkis1}.`); // console.log(`Vardenio pazymiu vidurikis yra 5,`); ---> norimas atsakymas
console.log(`${student2.name} pazymiu vidurkis yra ${vidurkis2}.`);
console.log(`${student3.name} pazymiu vidurkis yra ${vidurkis3}.`);
console.log(`${student4.name} pazymiu vidurkis yra ${vidurkis4}.`);
