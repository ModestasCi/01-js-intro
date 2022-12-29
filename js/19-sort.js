console.clear();
/*SORT - rikiavimas jei lyginamos reiksmes yra (pirma uz antra):
    - mazesne (-1) - betkok neigiamas skaicius
    - lygios (0) - reiksmiu skirtumas lygus 0
    - didesne (1)- betkoks teigiamas skaicius 
    paprastas SORT teisingai dirba TIK su masyve esanciais STRINGais*/

    /** uzduotis. pagal abecele. is kito galo abeceles
     * dic-dictionary trumpinys */
const dic = ["Petras", "Maryte", "Jonas", "Ona"];
const dicAZ = [...dic].sort(); /** <--rasom vietoj dic.sort(()=>{}); pasidarom atskira kopija su SPREAD*/
const dicZA = [...dic].sort().reverse();
/** filtruojant masyva,uztenka paimti individualiai kiekviena elementa ir nuspresti reikalingas jis ar ne
 * MAPinant modifikuojama kiekviena reiksme individualiai(kitod reiksmes neturi itakos)
 * SORTinant su viena reikmse nieko nenuspresi. einamaja reiksme lygina su kitomis reikmemis. del to (siuo atveju) gaunamos dvi reiksmes */
console.log(dic);
console.log(dicAZ);
console.log(dicZA);

/** uzduotis. nuo maziausio iki didziausio ir atvirksciai 
 * su skaiciais elgiasi kaip su zodziais (string) tad naudojama a ir b reiksmiu veiksmai*/
const num = [10, 2, 8, 1, 4, 15, 6, 23, 45];
const numAZ = [...num].sort((a, b) => a - b); 
const numZA = [...num].sort((a, b) => b - a);
const numAZreverse = [...num].sort((a, b) => a - b).reverse(); /** tas pats kas 24 eilute. neefektyvu, nes reik 2 ciklu*/
console.log(num);
console.log(numAZ);
console.log(numZA);
console.log(numAZreverse);

/** uzduotis. issrikiuot nuo jauniausio iki seniausio, paimant konkrecia reiksme is objekto
 * cia masyvo objekte yra kompleksiniai kintamieji*/
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
const studentsAgeAZ = [...students].sort((a, b) => a.age - b.age); /** istraukiam konkrecia reiksme su .key */
const studentsAgeZA = [...students].sort((a, b) => b.age - a.age);
console.log(studentsAgeAZ);
console.log(studentsAgeZA);

/** uzduotis. vardas pagal abecele ir atvirksciai */
const studentsNameAZ = [...students].sort((a, b) =>
	a.name < b.name ? -1 : a.name === b.name ? 0 : 1); /** paverciam string i num ir suteikiam salyga kaip COMPLEX TERNARY
    su pirmu klausimu a.name<b.name ? -1 nustatysiu, kad reikia grazinti -1
    antras klausimas :a.name===b.name?0 nustatysiu ar jie lygus, tada grazinu 0
    :1 priesingu atveju 1 */
console.log(studentsNameAZ);

/** uzduotis. vardai pagal abecele. DESTYTOJUI skaitomiau sis budas */
function compareStudents(a, b) {
	if (a.name < b.name) { /** jei studento a vardas < uz studento b*/
		return -1;
	}
	if (a.name === b.name) { /** jei vardai lygus 0 */
		return 0;
	}
	return 1;
}

const studentsNameAZfunc = [...students].sort(compareStudents);
console.log(studentsNameAZfunc);