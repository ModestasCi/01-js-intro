console.clear();
/*
Perrasyti teksta is galo i prieki.

string (simboliu array) <--> array (bet ko array)    string is esmes yra array
*/

function reverseString(str) {
	if (typeof str !== "string") {
		/**ne string */
		return `ERROR: duok stringa, o ne ${typeof str}!`;
	}
	// if (!str) {
	// return `ERROR: duok stringa, o ne ${typeof str}!`;
	// }
	let text = "";

	// 1) eiti is teksto galo, imti simboli ir lipdyti nauja teksta
	// for (let i = str.length - 1; i >= 0; i--) {
	// 	const symbol = str[i];
	// 	text += symbol;
	//}
	// 2) eini is teksto priekio ir imti simboli is galo
	// for (let i = 0; i < str.length; i++) {
	// 	const symbol = str[str.length - i - 1];
	// 	text += symbol;
	// }
	// 3) eini is teksto priekio ir imti simboli is priekio
	for (let i = 0; i < str.length; i++) {
		const symbol = str[i];
		text = symbol + text; // kiekvienas sekantis simbolis statomas pries konstruojama teksta , vis labiau i prieki
	}

	return str;
}

// console.log(reverseString());
// console.log(reverseString(undefined));
// console.log(reverseString(5));
// console.log(reverseString(true));
// console.log(reverseString(false));
// console.log(reverseString(null));
// console.log(reverseString([]));
// console.log(reverseString({}));
// console.log(reverseString(function () {}));
// console.log(reverseString(""), "-->", "");

// console.log(reverseString("a"), "-->", "a");
// console.log(reverseString("g"), "-->", "g");
// console.log(reverseString("fff"), "-->", "fff");
// console.log(reverseString("asdsa"), "-->", "asdsa");
console.log(reverseString("sedek uzu kedes"), "-->", "sedek uzu kedes");
console.log(reverseString("sula"), "-->", "alus");
console.log(reverseString("abcdef"), "-->", "fedcba");
console.log(reverseString("qwerty"), "-->", "ytrewq");
console.log(reverseString(""), "-->", "");
