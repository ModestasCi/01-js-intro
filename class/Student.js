/**classĖS IŠSPAUSDINIMO IR SINTAKSĖS LOGIKOS IŠAIŠKINIMAS*/
// class Student {
// 	constructor(vardas, gimimoMetai) {
// 		/**jei pažymėti this.isMarried=false;
// pagal nutylėjimą,galim neprirašt constructorIAUS kintamojo,santuokoje(ale priimant į univera neklausiam ar jie santuokoje)*/
// 		this.name =
// 			vardas; /**--- <-this.name(buvo vardas pries tai)terminal atspaudzia name:(buvo vardas pries tai).
// ---constructor(vardas) nespausdina terminalE, nes tai lokalusis kintamasis, function parametras.
// ---= vardas; nespausdina terminalE, nes tai mano sukurtas parametras,kurio reiksme priskiriama prie this.name.*/
// 		this.birthYear = gimimoMetai;
// 		this.isMarried = false; /**pagal nutylejima(sugalvota sąlyga) false (vietoj santuokoje).
// Taip terminalE galima visuose isMarried nurodyt false pagal poreiki */
// 		this.marks =
// 			[]; /**Petras'kelione:new Student->class Student->constructor(vardas(čia aš sugalvoju
// 		/**console.log('-->', vardas);*/
// atitinkama logišką pavadinimą))->this.name = vardas;->consle.log(petras, petras.name)->terminale->
// Student {name: 'Petras'} Petras pagaliau atkeliavo pagaliau :D
// ---this.name = vardas <-sitam kuriamam objektui sukuriama reiksme .name(key). rakto reiksme yra kintamojo vardas reikmse.
// ---constructor(){} <-specialaus pavadnimo metodas.Lyg Student classĖS pagrindinis metodas(t.y.
// pagrindine function),kuri iskvieciama.Nedarys nieko kol bus tuščias logikos blokas {}.
// t.y. tuscias{},tol negausime ivestos info.
// ---(vardas) <-classĖJE Student esantis constructorIAUS blokas.
// ---'-->' <-cia sau, kad matyt ka isspausdina.*/
// 	}
// } iškelta iš index.js

// PAVYZDYS ALIUZIJA KAIP, KOKIU BŪDŲ indexe.js SĄVEIKAUJA su DUOMENIMIS iš KITO FAILO(šiuo atveju Student.js)
// Kad suvaikščiotų duomenys,abu vienu metu(tiek index.js, tiek Student.js), PRIVALO eksportuoti/importuoti duomenis.
// index.js - IMPORTUOTOJAS
// Student.js - EKSPORTUOTOJAS.Jei tai būtų valstybė ir jei už class { }yra poreikis naudoti(pvz function sum() { } - kartais vartojima),
// kuri reikalinga class vidiniam darbui.Eksportuotojas nemato tos funkcijos(kas yra kitoje valstybeje, valstybe su 
// savo duomenimis elgiasi taip kaip nori ir eksportuoja tai ka leidzia)

class Student { /** class Math jei yra poreikis */
	#name = ''; /** =""; vietoj =vardas; -jei sakykim paekistas vardas buvs */
	#birthYear = 0; /**sias 5 eilutes rasyt kai # naudojama */
	#isMarried = false;
	#shoes = 40;
	#marks = [];

	constructor() { /** buvo (vardas, gimimoMetai) */
		this.#name = 'Petras'; /**buvo = vardas; šiose  eilutese apsirašom kintamuosius kaip this#name ir t.t.; */
		this.#birthYear = 0; /** buvo = gimimoMetai; # galima nenaudoti, jei apsaugos nereik . # pavercia privaciu. destytojas beveik neneuadoja*/
		this.#isMarried = false;
		this.#shoes = 40;
		this.#marks = [];
	}
/** Normalūs mums uprantami kintamieji classIŲ ribose, yra pasiekiami tik to konkretaus metodo viduje  */
	getName() { /** updateName(name) */
		return this.#name; /**{this.name=name;} */
	}
	// check() {
	// 	if () { /** ()<--irasyti patikrinimo salygas */
	// 		return false;
	// 	}
	// 	return true;
	// }

	isValidMark(mark) { /** isValid(mark-klausia ar pazymys validus) */
		if (
			typeof mark !== "number" 
			|| !isFinite(mark) /** jei ne baigtinis skaicius */
			|| mark < 1
			|| mark > 10 
			|| mark % 1 !== 0
		) {
			return false;
		}
		return true;
	}	

	// Metodas(ale kaip funkcija), itraukiant nauja pazymi
	addMark(mark) { /**priskiriu šiam kontekstui parametrą (mark).  */
// 		console.log(mark, this.name, this.marks); /**mark-terminal spaudzia ivestus duomenis is index addMark.
// siame kontekste this reprezentuoja VISA šį konkretų studenta(kazkada petra, kazkada ona, maryte ir t.t.).
// Ale cloud(debesy) esanti studenta, bet viena nekonkretu. Su this.keywordAI patampa veikiantis*/
		if (!this.isValidMark(mark)) { /** if (typeof mark !== 'number' || !isInfinite(mark) || mark < 1 || mark > 10 || msrk %1 !== 0). !this.isValid(mark)-klausia ar nevalidus pazymys */
			return "ERROR"; /** alternatyva virsutiniam komentarui if(mark<1||mark>10||isNan(mark)||mark %1!==0) */
		}
		this.#marks.push(mark); /** this.marks.push(mark); kreipiamiames i studento pazymiu masyva (this.marks) ir Į .pushINAMAS(mark(gautaspažymys));. */
		return "OK";
	}

	addMarks(...marks) { /** iskviecia is index.js add.marks masyva */
		for (const mark of marks) {
			if (!this.isValidMark(mark)) { /** cia pakeista kaip ir marksAverage1 pavyzdyje */
				continue;
			}
			this.#marks.push(mark);
		}
	}

/** reduce.analogiskas metodas ant masyvo . Metodas itraukiant nauja pazimi
 * patikrinu ar normalus dalykas su sia funkcija*/
	marksAverage() { /**info iš išorės nereikia,nes manipuliuos vidine info Čia */
		if (this.#marks.length === 0) { /** this.marks.reduce((t,m) => t + m, 0) / this.mark.length; nesvarbu, ka returnINSI.ifUS naudoja,jei nori atpažinti specifinius atvejus  */
			return "neiskaita"; /** jei nera pazymiu */
		}
		return this.#marks.reduce((t, m) => t + m, 0) / this.#marks.length; /** reduce(aprašoma funkcija,ka daryti su masyve esanciais nariais). t-total;m-marks;0-nurodoma nuo kur pradet.*/
	}

	//su filter
	marksAverage1() {
		const correctMarks = this.marks
		.filter(this.isValidMark); /**---correctMarks <-senu marks atfiltruotos reikšmės
.filter(m => m > 1); <-su .filter paimam pažymį ir pasilikti didesnius uz 1
.filter(m => m <= 10); <-siu triju logika sukosi 23kartus.
.filter(m => m % 1 === 0); kad atmesti skaicius su kableliu
.filter(m => m >= 1 && m <= 10 && m % 1 ====0); <-alternatyva virsutinem trim eilutem sukasi 10 kartu*/

		if (correctMarks.length === 0) {
			return "neiskaita";
		}

		return correctMarks.reduce((t, m) => t + m, 0) / correctMarks.length;
	}

// trecias pavyzdys
	marksAverage2() {
		let sum = 0;
		let correct = 0;
		for (const mark of this.marks) {
			if (this.isValidMark(mark)) { /**pakeistas visur kur kartojosi auksciau */
				sum += mark;
				correct++;
			}
		}
		if (correct === 0) { /** keiciam if(this.marks.length === 0);. correct, kai visos reiksmes blogos */
			return "neiskaita";
		}
		return sum / correct; /** return sum / this.marks/lenght; */
	}
}

export { Student }; /**Eksportavima apsirasom kodo apacioje/gale.
---export { Student, Math } jei yra Math poreikis.
---export { Student, Teacher }; <-jei norima eksportuoti antra objekta iš šio failo
---{ Student } <-importuojamas objectAS, kuriame yra TIK StudentAS.
---export default Student <-neapsaugotas eksportavimo pervadinimo užrašymo būdas
---module.exports = Student; <-nenaudojamas eksportavimo budas.*/