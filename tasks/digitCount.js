console.clear();
/*
Skaitmenu kiekis skaiciuje.
*/

function digitCount(number) {
	if (typeof number !== "number" || !isFinite(number)) {
		/** Sablonas?? uŽerrorint visus Infinity, NaN, bolean ir pan??  */
		return "ERROR";
	}

		console.log(number);

	// const numberAsString = number.toString(); /** kintamojo pavertimas i string 1. vienodai veikia, naudot kuri patogesne*/
	const numberAsString = "" + number; /** bet sitas lyg ir greitesnis .kintamojo pavertimas i string 2.  */

	// let count = 0; /** pakeista zemiau esancia eilute */
	let count = numberAsString.length;

		if (number < 0) {
			count--;
		}

		if (number % 1 !== 0) { /** identifikuojam skaicius su kableliu */
			count--;
		}

	// return ('' + number).length;
    return count;
}

// console.log(digitCount(true));
// console.log(digitCount("asd"));
// console.log(digitCount(NaN));
// console.log(digitCount(Infinity));
// console.log(digitCount(-Infinity));

// console.log(digitCount(0), "-->", 1);
// console.log(digitCount(5), "-->", 1);
// console.log(digitCount(781), "-->", 3);
// console.log(digitCount(37060123456), "-->", 11);
// console.log(digitCount(3.14), "-->", 3);
// console.log(digitCount(-37060123456), "-->", 11);
// console.log(digitCount(-3.14), "-->", 3);

console.log(digitCount(1000000000000000000000), "-->", 22); /** 10000...000 = 1e+21 o tai reiskia 5 simobolius :D */
console.log(digitCount(0.000000000000000000001), "-->", 22); /** prie 1e+21 pradines reiksmes pridejus betkoki skaiciu, galutinis atsakymas 1e+21 nekis */
console.log(digitCount(1000000000000000000000.000000000000000000001),"-->",22); /** iki +-16 skaitmenu . egzistuoja paklaida*/
