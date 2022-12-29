console.clear();
/*
MAP - grazinamas naujas to pacio dydzio masyvas
  su modifikuotomis reiksmemis. MAP veikimo principas labai panasus i foreach
*/

/** uzduotis padaryti masyvo kopija */
const marks = [10, 2, 8, 4, 6];
const a = marks; /** kai kalbama apie kompleksinius kintamuosius ir jei sukuri nauja kintamaji ir priskiri kita kintamaji,
kuris yra kompleksinis(t.y. masyvas arba objektas). tuomet abu(marks ir a) elgsiasi  vienodai su duomenimis*/

console.log(marks); /** cia aprasomi du kintamieji, bet abu yra masyvai t.y. ir marks ir a */
console.log(a);
marks[0] = 1;
console.log(marks);
console.log(a);

a[2] = 3;
console.log(marks);
console.log(a);

console.log('Copy spread');
/** greiciausias budas padaryt masyvo ar objekto kopijas */
const b = [1, 2, 3, [4, 5, 6]];
const c = [...b]; /** DESTYTOJUI patinka.su SPREADu kopijos daromos tik pirmo lygio (shallow copy?) */
b[0] = 7;
console.log(b);
console.log(c);

c[3][0] = 99; /** pas abu, tiek a, tiek c pakeicia */
console.log(b);
console.log(c);

console.log('Copy for');
const f = [9, 8, [7, [4 , 3], 2], 6, 5];
const g = []; /** tuscias masyvas */
for (let i = 0; i < f.length; i++) {
      if (Array.isArray(f[i])) { /** ar masyvas yra masyvas */
				const innerArray = []; /** pradziai sukuriam tuscia vidini masyva, kai jis uzpildomas, po to suPUSHinamas
                o uzpildomas jis vidiniu masyvu f[i] */
          
				for (let j = 0; j < f[i].length; j++) { /** naujas ciklas cikle, i uzimtas, del to naudojam j */
					if (Array.isArray(f[i][j])) { /** vel klusiam ar array yra array */
                        const innerArray2 = []; 
                        
						for (let k = 0; k < f[i][j].length; k++) { /** nasujas ciklas ciklo cikle */
							innerArray2.push(f[i][j][k]);
						}
						innerArray.push(innerArray2);
					} else { /** jei arrray yra ne array, t.y. false */
						innerArray.push(f[i][j]);
					}
				}
				g.push(innerArray);
			} else {  /** jei array ne masyvas(not true) */
				g.push(f[i]); /** į g[](tuščią masyvą) įPUSHina f masyvo i-taji nari. PUSH metodas kuris is galo itraukia naujas 
    reiksmes.Pirmo lygio kopijavimas */
			}
}
console.log(f); /** cia rezultatai yra skirtingi, skirtinguose adresuose "gyvenantys" */
console.log(g); /** cia rezultatai yra skirtingi, skirtinguose adresuose "gyvenantys" */

f[0] = 99;
f[2][0] = 77; /** kur su [2] yra pasiekiama 3 masyvo reiksme,o su [0] pasiekiama [2] masyvo gilumine reiksme t.y. vietoj 7 gunam 77. antro lygio masyvas */
f[2][1][0] = 44; /** cia pakeiciamas trecio lygio masyvas */
console.log(f);
console.log(g);
//auksciau pateikta koda reiketu perrasyti su rekursija. nd?

console.clear();
console.log("map");

/** uzduotis. norima grazinti tokios pacios apimties, taciau pakeista masyva. const egss = [3, 5, 7, 9, 11]*/
const kiausiniai = [2, 4, 6, 8, 10];
const eggs = []; /** pirma sukuriamas tuscias masyvas */
for (let i = 0; i < kiausiniai.length; i++) { /** po to su ciklu praseiti per originalu kiausianiai masyva */
	eggs.push(kiausiniai[i] * 2 - 1); /** ipushinamas kiausiniu i-tasis narys. esme, kad reikia kiekviena pradinio masyvo reiksme identiskai modifikuoti*/
}
console.log(kiausiniai);
console.log(eggs);


/** siuo atveju skaidoma logika i 2 atskiras dalis vd. kaip su kiausiniais kai viskas vienoje kruvoje (reikmses 
 * kontravimas ir konvertavimas 2in1*/
function priceConvert(price) { /** pirma logika. priceConvert-savas sugalvotas pavadinimas */
	return price * 1.5;  /** cia 1.5 yra 50% antkainis */
}
const didmenineKaina = [10, 20, 50, 100];
const mazmenineKaina = [];
for (const kaina of didmenineKaina) { /**  antra logika.for of<---- vietoj for(let i; i < didmenineKaina.length; ++i) */
	mazmenineKaina.push(priceConvert(kaina)); /** siose dvejose eilutese aprasoma kaip is vieno masyvo pagaminti kita masyva, modifikuojant kiekviena reiksme */
}
console.log(didmenineKaina);
console.log(mazmenineKaina);

/** kitas kodo uzrasymo budas su kita sintakse */
const retailPrice1 = didmenineKaina.map((price) => price * 1.5); /** foreach ir map elgiasi vienodai. map()-kaip ciklas,
kuris iteruoja per nurodyta masyva(siuo atveju didmenineKaina). skliausteliuose bus funkcija kuria gauas panariui
modifikuojant is masyvo (yra 3 budai a)anonimine funkcija .map(function (){}); b)arrow function .map(() => {});  .map((parametras t.y.kaina))
c)duoti nuoroda i funkcija kuria naudosim*/
console.log(retailPrice1);

/** dar kitas pavyzdys. patinka destytojui*/
const retailPrice2 = didmenineKaina.map(priceConvert); /** duoti nuoroda(reference) i funkcija kuria reikes iskviesti 85-87eil. */
console.log(retailPrice2);
const aaa = [1, 2, 3, 4, 5, -1, -2, -3, -4, -5];
const bbb = aaa.map((n) => n * 2); /** imu skaiciu is masyvo n (n=>n*2) */
const ccc = aaa.map((n) => 0); /** kai norima grazinti tiesiog 0 */
const ddd = aaa.map((n) => (n > 0 ? n : 0)); /** jei teigiami palieku ramybej, jei neigiami paverciu i 0. ternar operator ?.
n:0 (kur: reiskia priesingu atveju)*/
console.log(aaa);
console.log(bbb);
console.log(ccc);
console.log(ddd);

/** uzduotis uzrasyti inicialus/pirma raide */
/** su map modifikacijos graziausios kai modifikacijos trumpos/paprastos*/
const names = ["Petras", "Maryte", "Jonas", "Ona"];
const abbr = names.map((s) => s[0]); /** abbr-abbreavation(inicialai?). s-string trumpinys */
console.log(names);
console.log(abbr);

const students = [
	{ name: "Petras", age: 99, isMarried: true },
	{ name: "Maryte", age: 88, isMarried: false },
	{ name: "Jonas", age: 77, isMarried: false },
	{ name: "Ona", age: 66, isMarried: true },
];

const studentNames = students.map((s) => s.name); /** jei domina is masyvo istraukti tik varda */
const studentAges = students.map((s) => s.age); /** tik amzius */
const studentStatus = students.map((s) => s.isMarried); /** tik ar susituoke */
console.log(students);
console.log(studentNames);
console.log(studentAges);
console.log(studentStatus);

const extra = { children: 0, phone: null }; /** null imanoma, taciau nenurodyta reiksme */
const studentExtra = students.map((s) => ({ ...s, ...extra })); /** extra duomenys prie esamu objektu.
spreadinima objekta ivilkti i paprastu skliaustus  pv => ({}) */
console.log(studentExtra);