console.clear();
// /*
// LOOP - ciklas
// tevas -> for
// vaikai (isvestiniai) -> while, for-of, for-in(masyvam nenaudojamas), foreach   Sie ciklai surasyti efektyvumo prastejimo tvarka
// next-level (HOF - higher order function) -> map, sort, filter, reduce, ...
// */

const marks = [10, 2, 8, 4, 6];

// efektyvumas 100% FOR (destytojui siek tiek lengvesnis nei su while, nors is esmes jokio skirtumo). man trumpesnis
let sumFor = 0;
for (let iFor = 0; iFor < marks.length; ++iFor) { /** rasom vietoj let i=0; i<marks.lenght; ++i */
    const mark = marks[iFor];  /** vieno konkeretaus kintamojo iskelimas, kad butu GERIAU skaitoma */
    sumFor += mark; /** sias dvi eilutes rasom vietoj marks[i] */
}
console.log('For:', sumFor / marks.length);

// efektyvumas 99% WHILE(tarsi IFas), kokia 0.1% atsiliekantis nuo for. beveik jokio skirtumo kuri naudot
/** suka koda TOL KOL nepereis konkreciu atveju per duota masyva */
let sumWhile = 0; /** pazymiu sumavimas */
let iWhile = 0; /** iteratortius TURI buti aprasytas pries pradedant ciklint (abu let) */
while (iWhile < marks.length) { /** skliausteliuose patikrinimo salyga  */
    const mark = marks[iWhile]; /** issitraukimas pazymys */
    sumWhile += mark; /** istrauktas vienas pazymys */
    iWhile++; /** kad uzbaigt LOOPSa */
} /** riestiniuose aprasoma logika, kur didinamas iteratorius */
console.log('While:', sumWhile / marks.length);

// efektyvumas 95-97% FOR-OF (tinka kai reikia eiti ne per visas reiksmes, bet pvz kas antra/tracia reiksme )
/** kitaip sakant supaprastinta for uzrasymo budas 
 * siuo atveju, kai nereikia ismetineti reiksmiu sitas DESTYTOJUI LABIAUSIAI patinka palyginus 
 * su for/while
*/
let sumForOf = 0;
for (const mark of marks) { /** mark cia gali buti betkoks sugalvotas pavadinimas, svarbu suprantamas */
    sumForOf += mark;
}
console.log('For-of:', sumForOf / marks.length);

// efektyvumas 70% FOREACH megstamas nes malonesnis skaitomumas, nors lagina
let sumForeach1 = 0;
marks.forEach(function (mark, iForeach, list) { /** marks-masymas+ .forEach-marks masyvo metodas=marks.forEach 
techniskai tai nera ciklas, o masyvo metodas. FOREACH turi zinoti, kai eina per duota masyvo nari, ka su 
kiekvienu nariu daryti. ka daryti aprasom sklaisteliuose, apacioje aprasomi visi variantai */
    // marks.forEach(function () { }); /** anonimine funkcija be reikses, pozicijos nr ir per ka iteruojama */
    sumForeach1 += mark;
});
console.log('Foreach 1:', sumForeach1 / marks.length); /** nepatinka destytojui sis varinatas */

let sumForeach2 = 0; /** panasus i MAP */
marks.forEach(mark => sumForeach2 += mark); /** lokaliai aprasyta rodikline funkcija. siek tiek maziau simboliu */
console.log('Foreach 2:', sumForeach2 / marks.length);

let sumForeach3 = 0;
function sumavimasForeach(mark, iForeach, list) {
    return sumForeach3 += mark;
}
marks.forEach(sumavimasForeach); /** marks.forEach(Cia Logika aprasoma) */
console.log('Foreach 3:', sumForeach3 / marks.length);

// FOR-IN (iteruoja per objekta) logika/rasyba pasiziuret su 07-object.js
// {}.lenght --> undefined //forin neturi lenghto
const user = {
    name: 'Petras',
    age: 99,
    isMarried: true,
    favoriteNumber: 13,
    children: 5,
    grandChildren: 25,
    key: 'geltonas',
    negative: -88
}

let sumForObj = 0; /** vietoj const rasom let */
const userKeys = Object.keys(user);
for (let i = 0; i < userKeys.length; i++) {
    const key = userKeys[i]; /** key cia name, age, children...negative */
    const value = user[key]; /** rasom vietoj  */
    if (typeof value === 'number' /** rekomenduoja IFe VISADA rasyti su typeof(tipo). pirmiausia klausiam ar tai number */
        && isFinite(value) /** uzklausia ar baigtine reiksme*/
        && value > 0) {  /**  klausia ar teigiamas. sioje funkcijoje svarbu eiliskumas */
        sumForObj += value;
    }
    // console.log(key, user[key]); /** user[key] vietoj user.key - universaliausias uzrasymo budas */
}
// const sumForIn = 99 + 13 + 5 + 25; /** norimas gaut atsakymas atmetus viska kas ne skaiciai. uzduotis */
console.log('For-in:', sumForObj, '->', 142);

/** 75-88 eil. uzrasymas su FOR-IN */
let sumForIn = 0;
for (const key in user) {  /** rasom vietoj (let i = 0; i < userKeys.length; i++) */
    const value = user[key];
    if (typeof value === 'number'
        && isFinite(value)
        && value > 0) {
        sumForIn += value;
    }
}
console.log('For-in:', sumForIn, '->', 142);