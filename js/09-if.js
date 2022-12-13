console.clear();
/*
    IF - reiksmiu palyginimas; salyga tenkina/netenkina?
    Palyginimo operatoriai:
    visi: >, <, >=, <=, ==(iskelia/atsako AR yra LYGU), !=, ===, !==
    naudotini: >, <, >=, <=, ===, !==
    NEnaudotini: ==, !=
    !: sauktukas skaitomas siame kontekste 'ne'. jei tiksliau priesinga reiksme. lygybei priesingas nelygybe
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

console.log('start');

if (a > b) {
    console.log(`${a} daugiau uz ${b}`);
} else {
    console.log(`${a} nera daugiau uz ${b}`);
    console.log(`${a} maziau arba lygu uz ${b}`);
}

if (a == b) { /** == iskelia/atsako i klausima AR yra LYGU. Labai svarbu teisingai suformuluoti teiginius*/
    console.log(`${a} yra lygu ${b}`);
} else {
    console.log(`${a} nera lygu ${b}`);
}

if (a <= b) {
    console.log(`${a} maziau arba lygu uz ${b}`);
} else {
    console.log(`${a} nera maziau arba lygu uz ${b}`);
}

if (a != b) {  /** a ne lygu b. sios salygos tikras perskaitymas */
    console.log(`${a} ne lygu ${b}`);
} else {
    console.log(`${a} lygu ${b}`);
}

console.log('------');
const c = 11;
const d = 13;
if (c > d) {
    console.log('C daugiau uz D');
} else if (c < d) {            
    console.log('C maziau uz D');
} else if (c == d) {
    console.log('C lygu D');  /** jei sis variantas tinka, reiskia auksciau buve netiko*/
} else {
    console.log('kazkas neaiskaus su C ir D');  /** sito atvejo neimanoma pasiekti */
}

console.log('------');
if (c > d) {
    console.log('C daugiau uz D');
} else {
    console.log('C ne daugiau uz D');
}
if (c < d) {
    console.log('C maziau uz D');
} else {
    console.log('C ne maziau uz D');
}
if (c == d) {
    console.log('C lygu D');
} else {
    console.log('C ne lygu D');
}
console.log('end');

const petras = [10, 2, 8, 4];
const maryte = [8, 4, 6];

if (petras.length >= maryte.length) {
    console.log('Petras turi daugiau ar vienodai su Maryte pazymiu');
} else {
    console.log('Maryte turi daugiau pazymiu uz Petra');
}

console.log('--- griezai ---');

if (5 === 5) { /** pvz bus klaida jei if (labas === Labas) */
    console.log('taip');
}

if (5 !== 3) {
    console.log('taip');
}

console.log('-----------------');

if (false == '') {    /** tol kol yra kalba apie palyginima vienodu tipu nebus problemu tarp == ar === (kai if labas == Labas)..*/
    console.log('vienodi'); /** Duos identiskus rezultatus, kai lyginami vienodi tipai boolean-boolean, stringstring ir t.t */
} else {  /** jei yra skirtingo tipo tada true jei reiksmes vienodos  */
    console.log('skirtingi'); /** paprasta lygybe tikrina tik reiksmes. griezta lygybe tikrina tipa ir reiksme */
}

if (true == 1) {
    console.log('vienodi su griezta ligybe');
}

const suma = Infinity;

if (typeof suma === 'number') {
    console.log('Darau pavedima ;)');
} else {
    console.log('Jokio pavedimo nebus!!!!');
}

console.log('absdef' / 5);