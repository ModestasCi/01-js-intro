console.clear();
// Susumuoti (SVEIKUOSIUS skaicius intervale nuo-iki.//

// jeigu(tamppa if) ("from" yra mazesnis uz "to"),{ <--- "from yra mazesnis uz " to-salyga funkcijos
//     tai ciklas from - to}
// ----vietoj virsutines salygos susidaro funkcija
// if (from, to),{
//      ciklas from - to
// }

// jeigu(tampa if) ("from" yra didesnis uz "to"),{}
//     tai ciklas to - from}
// ----vietoj virsutines salygos susidaro funkcija. apacioje kinta atitinkamai
// if (to, from),{
//      ciklas to - from
// }

//       skaiciai nuo   iki
function rangeSum(from, to) {
	// 1)parametru validacija

	// let sum = 0; //kodo pradzioje  susikuriama laikinas kintamasis
	// kad nekartot  skirtingu i reiksmiu rasom from to
	// for (let i = from; i <= to; i++) {
	// sum += i; // i-tojo skaiciau sumavimas
	// }
	// return sum; <--- viSas sis kodas kinta i 59-81 eilutes

	//-------PIRMAS TRUMPIAUSIAS KODO UZRASYMO BUDAS----------
	// if (typeof from !== "number"
	// 	|| typeof to !== "number" //<---jei NEsi number(nesvarbu boolean, masyvas,funkcija....)
	// 	|| !isFinite(from)
	// 	|| !isFinite(to) // jei nera baigtinis
	// 	|| from % 1 !== 0 // jei nera baigtinis
	// 	|| to % 1 !== 0) { <-- virsutines 4 eilutes yra apatiniu ifu trumpinys
	// 	return "ERROR: visi parametrai turi buti sveikieji skaiciai";
	// }
	//-------PIRMAS TRUMPIAUSIAS KODO UZRASYMO BUDAS----------

	//----------ANTRAS KODO UZRASYMO BUDAS---------
	if (typeof from !== "number") {
		// 1)tai nera skaicius
		return "ERROR: pirmasis parametras turi buti skaicius";
	}
	if (typeof to !== "number") {
		return "ERROR: antrasis parametras turi buti skaicius";
	}

	//if(isFinite(from)){ // isFinite -ar tai baigtinis skaicius, sioje salygoje
	// return 'error'} < --- su isFinite sutrumpinam apatine funkcija
	//if(to===Infinity
	// || to == Infinity
	// || isNaN(to){ return 'error' }

	if (!isFinite(from)) {
		// 2)tai skaicius, bet ne normalus (sveikasis)
		return "ERROR: pirmasis parametras turi buti normalus skaicius";
	}
	if (!isFinite(to)) {
		return "ERROR: antrasis parametras turi buti normalus skaicius";
	}
	if (from % 1 !== 0) {
		// 3) tai normalus, bet ne sveikasis (skaicius)
		// jei liekana ne nulis
		return "ERROR: pirmasis parametras turi buti sveikasis skaicius";
	}
	if (to % 1 !== 0) {
		// jei liekana ne nulis
		return "ERROR: antrasis parametras turi buti sveikasis skaicius";
	}
	//----------ANTRAS KODO UZRASYMO BUDAS---------

	// 2)logika
	let sum = 0;
	// sis kodo aprasymas optimaliausias pagal destytoja
	if (from < to) {
		for (let i = from; i <= to; i++) {
			sum += i;
		}
	}
	if (from > to) {
		for (let i = to; i <= from; i++) {
			sum += i;
		}
	}
	if (from === to) {
		sum += from;
	}

	// 3)rezultato validacija
	// 4)rezultato grazinimas
	return sum;
}
// console.log("----su Infinity-------");
console.log(rangeSum(0, Infinity));
console.log(rangeSum(-Infinity, 0));
console.log(rangeSum(0, -Infinity));
console.log(rangeSum(-Infinity, Infinity));
console.log(rangeSum(-Infinity, -Infinity));
console.log(rangeSum(Infinity, Infinity));

// console.log("------su NaN-----");
console.log(rangeSum(0, NaN));
console.log(rangeSum(-NaN, 0));
console.log(rangeSum(0, -NaN));
console.log(rangeSum(-NaN, -NaN));
console.log(rangeSum(-NaN, NaN));
console.log(rangeSum(NaN, NaN));

// console.log("-----su null ir number------");
console.log(rangeSum(5, null));
console.log(rangeSum(null, 5));
console.log(rangeSum(null, null));

// console.log("------su true ir number-----");
console.log(rangeSum(5, true));
console.log(rangeSum(true, 5));
console.log(rangeSum(true, true));

// console.log("-----------");
console.log(rangeSum(5, false));
console.log(rangeSum(false, 5));
console.log(rangeSum(false, false));

// console.log("------su masyvu ir number-----");
console.log(rangeSum(5, []));
console.log(rangeSum([], 5));
console.log(rangeSum([], []));

// console.log("------su objektu ir number-----");
console.log(rangeSum(5, {}));
console.log(rangeSum({}, 5));
console.log(rangeSum({}, {}));

// console.log("----string+number-------");
console.log(rangeSum("labas", 10), "-->", "ERROR");
console.log(rangeSum(10, "labas"), "-->", "ERROR");
console.log(rangeSum("labas", "rytas"), "-->", "ERROR");

// console.log("-----sveiki skaiciai------");
console.log(rangeSum(0, 4), "-->", 10);
console.log(rangeSum(0, 100), "-->", 5050);
console.log(rangeSum(-70, 30), "-->", -2020);
console.log(rangeSum(574, 815), "-->", 168069);
console.log(rangeSum(-50, 50), "-->", 0);
console.log(rangeSum(4, 0), "-->", 10);
console.log(rangeSum(100, 0), "-->", 5050);
console.log(rangeSum(30, -70), "-->", -2020);
console.log(rangeSum(815, 574), "-->", 168069);
console.log(rangeSum(50, -50), "-->", 0);
console.log(rangeSum(0, 0), "-->", 0);
console.log(rangeSum(5, 5), "-->", 5);
console.log(rangeSum(-5, -5), "-->", -5);

// console.log("------ne sveiki skaiciai-----");
console.log(rangeSum(2.5, 10));
console.log(rangeSum(2, 10.5));
console.log(rangeSum(2.5, 10.5));
console.log(rangeSum(-2.5, 10));
console.log(rangeSum(2, -10.5));
console.log(rangeSum(-2.5, -10.5));
console.log(rangeSum(-2.5, 10.5));
console.log(rangeSum(2.5, -10.5)); //nes salygoje reikalauja tik sveikuju skaiciu
