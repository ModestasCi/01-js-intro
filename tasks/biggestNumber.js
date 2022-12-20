console.clear();
/*
Didziausias skaicius sarase.
*/

function biggestNumber(list) {
	// 1)PIRMINIO PARAMETRO VALIDACIJA
	if (!Array.isArray(list)) {
		/** jei tu nesi masyvas tada turim problema  */
		return "ERROR: reikia masyvo.";
	}
	/** keicia virsutine eilute sias dvi
	 *  if (typeof list !== "object"
	 * || list === null) */

	if (list.length < 1) {
		return "ERROR: masyvas negali buti tuscias.";
	}


     // 2)ESMINE LOGIKA
	// antras pakeistas - let max = list[0]; // pirmas pakeistas - keicia let max = 0;
	let max = -Infinity;

	for (let i = 0; i < list.length; i++) { /** sitame cikle pasiimi elementa ir paklausi ar jis normalus skaicius*/
		const number = list[i];             /** galima kaip atskirus ifus arba kaip cia viena bendra*/
		if (typeof number === 'number' && isFinite(number) && number > max) { /** rasom vietoj sito if (number > max)  */
			max = number;
		}
	}

	// 3) GAUTO REZULTATOTO PATIKRINIMAS AR JIS LOGISKAS
	if (max === -Infinity) {
		return "ERROR: sarase nera nei vieno normalaus skaiciaus"
	}

	// 4)REZULTATO GRAZINIMAS cia numeracija pagal destytojo 4 zingsniu kodo logika
	return max;
}

console.log(biggestNumber("pomidoras"));
console.log(biggestNumber(true));
console.log(biggestNumber());
console.log(biggestNumber(5));
console.log(biggestNumber(function () {}));
console.log(biggestNumber(null));
console.log(biggestNumber({}));
console.log(biggestNumber([]));  /** kad ir tuscias vistiek objektas */

console.log(biggestNumber([0]), "-->", 0); /** kad ir tuscias vistiek objektas */
console.log(biggestNumber([1, 2, 3]), "-->", 3);
console.log(biggestNumber([-5, 78, 14, 0, 18]), "-->", 78);
console.log(biggestNumber([69, 69, 69, 69, 66]), "-->", 69);
console.log(biggestNumber([-1, -2, -3, -4, -5, -6, -7, -8]), "-->", -1);

console.log(biggestNumber([1, 2, 3, Infinity]), "-->", 3);
console.log(biggestNumber([1, 2, Infinity, 3]), "-->", 3);
console.log(biggestNumber([1, Infinity, 2, 3]), "-->", 3);
console.log(biggestNumber([Infinity, 1, 2, 3]), "-->", 3);

console.log(biggestNumber([1, 2, 3, NaN]), "-->", 3);
console.log(biggestNumber([1, 2, NaN, 3]), "-->", 3);
console.log(biggestNumber([1, NaN, 2, 3]), "-->", 3);
console.log(biggestNumber([NaN, 1, 2, 3]), "-->", 3);

console.log(biggestNumber([1, 2, 3, true]), "-->", 3);
console.log(biggestNumber([1, 2, true, 3]), "-->", 3);
console.log(biggestNumber([1, true, 2, 3]), "-->", 3);
console.log(biggestNumber([true, 0, -1, -2]), "-->", 0);

console.log(biggestNumber([1, 2, 3, "true"]), "-->", 3);
console.log(biggestNumber([1, 2, "true", 3]), "-->", 3);
console.log(biggestNumber([1, "true", 2, 3]), "-->", 3);
console.log(biggestNumber(["true", 0, -1, -2]), "-->", 0);

console.log(biggestNumber(["true", true, NaN, [], [5], Infinity, -Infinity, 0]),"-->", 0);
console.log(biggestNumber(["true", true, NaN, [], [5], Infinity, -Infinity]));

// console.log(biggestNumber([-5. [[78], 14], 0, 18]), "-->", 78);
