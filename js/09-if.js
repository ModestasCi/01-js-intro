console.clear();
/*
    IF - reiksmiu palyginimas; salyga tenkina/netenkina?
    Palyginimo operatoriai:
    visi: >, <, >=, <=, ==(iskelia/atsako AR yra LYGU), !=, ===, !==
    naudotini: >, <, >=, <=, ===, !==
    NEnaudotini: ==, !=
    !: sauktukas skaitomas siame kontekste 'ne'. jei tiksliau priesinga reiksme. lygybei priesingas nelygybe
    
    Loginiai operatoriai:
    && - AND - turi tenkinti visas funkcijos salygas
    || - OR - turi tenkinti bent viena funkcijos salyga
    
    Sablonai:
    if () {}
    if () {} else {}
    if () {} else if () {}
    if () {} else if () {} else {}
    if () {} else if () {} ...  else if () {}
    if () {} else if () {} ...  else if () {} else {}
*/

const a = 7;
const b = 5;

// jeigu A daugiau B, tai spausdiname 'A daugiau uz B'
// jeigu A nera daugiau B, tai spausdiname 'A nera daugiau uz B'

console.log("start");

if (a > b) {
	console.log(`${a} daugiau uz ${b}`);
} else {
	console.log(`${a} nera daugiau uz ${b}`);
	console.log(`${a} maziau arba lygu uz ${b}`);
}

if (a == b) {
	/** == iskelia/atsako i klausima AR yra LYGU. Labai svarbu teisingai suformuluoti teiginius*/
	console.log(`${a} yra lygu ${b}`);
} else {
	console.log(`${a} nera lygu ${b}`);
}

if (a <= b) {
	console.log(`${a} maziau arba lygu uz ${b}`);
} else {
	console.log(`${a} nera maziau arba lygu uz ${b}`);
}

if (a != b) {
	/** a ne lygu b. sios salygos tikras perskaitymas */
	console.log(`${a} ne lygu ${b}`);
} else {
	console.log(`${a} lygu ${b}`);
}

console.log("------");
const c = 11;
const d = 13;
if (c > d) {
	console.log("C daugiau uz D");
} else if (c < d) {
	console.log("C maziau uz D");
} else if (c == d) {
	console.log(
		"C lygu D"
	); /** jei sis variantas tinka, reiskia auksciau buve netiko*/
} else {
	console.log(
		"kazkas neaiskaus su C ir D"
	); /** sito atvejo neimanoma pasiekti */
}

console.log("------");
if (c > d) {
	console.log("C daugiau uz D");
} else {
	console.log("C ne daugiau uz D");
}
if (c < d) {
	console.log("C maziau uz D");
} else {
	console.log("C ne maziau uz D");
}
if (c == d) {
	console.log("C lygu D");
} else {
	console.log("C ne lygu D");
}
console.log("end");

const petras = [10, 2, 8, 4];
const maryte = [8, 4, 6];

if (petras.length >= maryte.length) {
	console.log("Petras turi daugiau ar vienodai su Maryte pazymiu");
} else {
	console.log("Maryte turi daugiau pazymiu uz Petra");
}

console.log("--- griezai ---");

if (5 === 5) {
	/** pvz bus klaida jei if (labas === Labas) */
	console.log("taip");
}

if (5 !== 3) {
	console.log("taip");
}

console.log("-----------------");

if (false == "") {
	/** tol kol yra kalba apie palyginima vienodu tipu nebus problemu tarp == ar === (kai if labas == Labas)..*/
	console.log(
		"vienodi"
	); /** Duos identiskus rezultatus, kai lyginami vienodi tipai boolean-boolean, stringstring ir t.t */
} else {
	/** jei yra skirtingo tipo tada true jei reiksmes vienodos  */
	console.log(
		"skirtingi"
	); /** paprasta lygybe tikrina tik reiksmes. griezta lygybe tikrina tipa ir reiksme */
}

if (true == 1) {
	console.log("vienodi su griezta ligybe");
}

const suma = Infinity;

if (typeof suma === "number") {
	console.log("Darau pavedima ;)");
} else {
	console.log("Jokio pavedimo nebus!!!!");
}

console.log("absdef" / 5);

if (NaN === NaN) {
	// nesamone, kad ir kokia butu yra nesamone
	console.log("NaN lygus");
} else {
	console.log("NaN nelygus");
}
if (NaN == NaN) {
	// dvi nesamones niekada nera viena kitai lygios
	console.log("NaN lygus");
} else {
	console.log("NaN nelygus");
}
console.log(5 / 0); //
console.log(0 / 0); // nesamone
console.log("ewregtrh" / 5); // nesamone
console.log("ewregtrh" / "dfgd"); // nesamone

// klausimas: pavyzdziui const a = [10, 100, -20]
//  ar teisinga vadindi array sudarancias reiksmes(10, 100, -20) kintamaisiais ?
// t.y. ar reiksmes ir kintamojo terminai siuo atveju gali buti kaip sinonimai?
// ats yra new, tai yra reiksmes (kaip number), ne kintamieji (kaip x ir pan? )

// const (inicijavimo budas, sukurta atminties lastele kuri prisimena tam tikra reiksme)
// a tai lastelei(kintamajam) suteiktas pavadinimas, kuri prisimena reiksme 5)
// 5 (tai reiksme)
// const a = 5;
// const b = 'fkshfw'; - tas patas kas su const a
// const c = []; - cia kintamasis neturi reiksmiu
// const d = [a, b]; is pradziu [a, b] yra kintamieji
// const d = [5, b];
// const d = [5, "fkshfw"]; bet galu gale jie tampa reiksmemis

console.clear();
console.log("CLEAR: 169");

// code nesting (nestinimas)

const day = 8;
// pirmas ilgesnis budas
if (day === 1) {
	console.log("pirmadienis");
} else {
	if (day === 2) {
		console.log("antradienis");
	} else {
		if (day === 3) {
			console.log("treciadienis");
		} else {
			if (day === 4) {
				console.log("ketvirtadienis");
			} else {
				if (day === 5) {
					console.log("penktadienis");
				} else {
					if (day === 6) {
						console.log("sestadienis");
					} else {
						if (day === 7) {
							console.log("sekmadienis");
						} else {
							console.log("tokia diena savaiteje neegzistuoja :(");
						}
					}
				}
			}
		}
	}
}

// antras trumpesnis budas
if (day === 1) {
	console.log("pirmadienis");
} else if (day === 2) {
	console.log("antradienis");
} else if (day === 3) {
	console.log("treciadienis");
} else if (day === 4) {
	console.log("ketvirtadienis");
} else if (day === 5) {
	console.log("penktadienis");
} else if (day === 6) {
	console.log("sestadienis");
} else if (day === 7) {
	console.log("sekmadienis");
} else {
	console.log("tokia diena savaiteje neegzistuoja :(");
}
console.log("end");

// Atrakcionu parkas
// 1 per ilgas rasymos budas. cia step by step pvz)
// const parkasDirba = true;
// if (parkasDirba === true) {}
// if (true === true) {}
// if (true) {}
// if (true) { vykdo sita koda } else {}
// 2 per ilgas rasymo budas. cia step by step pvz)
// const parkasDirba = false;
// if (parkasDirba === true) {}
// if (false === true) {}
// if (false) {}
// if (false) {} else { vykdo sita koda }

const parkasDirba = true; // sios dvi reiksmes tarpusavyje neturi nieko bendra
const bijauAukscio = false; // ir viena kitos neitakoja

// 1) sis uzrasymo budas destytojui skaitomesnis
if (parkasDirba) {
	if (bijauAukscio) {
		console.log("Neeeeeisiu!");
	} else {
		console.log("Einu i parka - bus smagu!");
	}
} else {
	if (bijauAukscio) {
		console.log("Parkas nedirba - man pasiseke - neisiu i parka.");
	} else {
		console.log("Parkas nedirba. Man liudna, nes labai norejai nueiti :(");
	}
}

// 2) sunkiau skaitomas kodas nes sugrusta
if (parkasDirba && bijauAukscio) {
	console.log("Maaaaaamaaa!");
} else if (parkasDirba && !bijauAukscio) {
	// su ! <--> !== psakomas neiginys - NE
	console.log("Einu i parka - bus smagu!");
} else if (!parkasDirba && bijauAukscio) {
	console.log("Parkas nedirba - man pasiseke - liksiu sausomis kelnemis.");
} else if (!parkasDirba && !bijauAukscio) {
	console.log("Parkas nedirba. Man liudna, nes labai norejai nueiti :(");
} else {
	console.log("Neimanomas pasiekti atvejis!");
}

const amzius = 14;
const amziausRiba = 12;
const ugis = 180;
const ugioRiba = 160;
const turiuPinigu = 55;
const kaina = 10;

// 1) uzrasymo budas (ieskai pirmos priezasties kodel
// ileisti) ilgiau skaitomas, bet aiskesnis
if (amzius >= amziausRiba) {
	if (ugis >= ugioRiba) {
		if (turiuPinigu >= kaina) {
			console.log("Einu");
		} else {
			console.log("Negalima");
		}
	} else {
		console.log("Negalima");
	}
} else {
	console.log("Negalima");
}

// 2) uzrasymo budas (kur ieskomos abi reiksmes vienu metu)
// trumpesnis pagal destytoja. bet tinka visi-priklausomai
if (amzius >= amziausRiba && ugis >= ugioRiba && turiuPinigu >= kaina) {
	console.log("Einu");
} else {
	console.log("Negalima");
}

// 3) uzrasymo budas (pirmos priezasties kodel neileisti)
if (amzius < amziausRiba) {
	console.log("Negalima");
} else if (ugis < ugioRiba) {
	console.log("Negalima");
} else if (turiuPinigu < kaina) {
	console.log("Negalima");
} else {
	console.log("Einu");
}
