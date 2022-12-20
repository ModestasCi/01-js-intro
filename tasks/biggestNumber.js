console.clear();
/*
Didziausias skaicius sarase.
*/

function biggestNumber(list) {
	if (!Array.isArray(list)) {
		/** jei tu nesi masyvas tada turim problema  */
		return "ERROR: reikia masyvo.";
	}
	/** keicia virsutine eilute sias dvi
	 *  if (typeof list !== "object"
	 * || list === null) */

    // antras pakeistas - let max = list[0]; // pirmas pakeistas - keicia let max = 0;
    let max = - Infinity;


	if (list.length < 1) {
		return "ERROR: masyvas negali buti tuscias.";
	}

	for (let i = 1; i < list.length; i++) {
		const number = list[i];
		if (number > max) {
			max = number;
		}
    }
    
    // if (max === -Infinity) {
    //     return: "ERROR sarase nera nei vieno normalaius skaiciaus";
    // }

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

// console.log(biggestNumber([-5. [[78], ]]), "-->", 0);
