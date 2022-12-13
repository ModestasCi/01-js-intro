/*
    STRINGS (tekstas)
    iniciavimas kabutemis:
        - viengubos (') (default)
        - dvygubos (")
        - backtick/apostrofas (`)
*/

const hi = 'labas';
console.log(hi);
const morning = "rytas";
console.log(morning);
const sentence = 'labas rytas';
console.log(sentence);
const combo1 = hi + ' ' + morning;
const combo2 = hi + " " + morning;
console.log(combo1);
console.log(combo2);

// Vienguba kabute (') (by default patogiau nes neerikia spasut shift, nors Js default yra dvigubos)
// Dvyguba kabute (").
// Vienguba kabute (') ir dvyguba kabute (").
const kabute2 = "Vienguba kabute (').";  //*---> kai norima atspausdinti vienguba kabute-inicijuojam su dvigubom;*//
console.log(kabute2);
const kabute1 = 'Dvyguba kabute (").'; //*---> kai norima atspausdinti dviguba kabute-inicijuojam su viengubom;*//
console.log(kabute1);
// escape overridina sekanti simboli, kad pvz cia tekstine kabute (backslash (\'))
const kabute112 = 'Vienguba kabute (\') ir dvyguba kabute (").';
console.log(kabute112);
const kabute212 = "Vienguba kabute (') ir dvyguba kabute (\").";
console.log(kabute212);
const kabute3 = 'Vienguba kabute (\') ir dvyguba kabute (\").';
console.log(kabute3);

console.log('-------------');
const viengubaKabute = "'";
const dvigubaKabute = '"';
// Vienguba kabute (') ir dvyguba kabute (").
const kabuciuSakinys = 'Vienguba kabute (' + viengubaKabute + ') ir dviguba kabute (' + dvigubaKabute + ').';
console.log(kabuciuSakinys);
const kabutesBacktick = `Vienguba kabute (') ir dviguba kabute (").`;
const kabutesBacktick2 = `Vienguba kabute ('), dviguba kabute (") ir backtick kabute (\`).`;
const backtickSakinys = `Vienguba kabute (${viengubaKabute}) ir dviguba kabute (${dvigubaKabute}).`; /** placeholder --> ${viengubaKabute} <---(rasom vietoj (')) zenkliukas padeda panaudoti priskirta kintamaji*/
console.log(backtickSakinys);

const user = 'John'; //  turi pasakyti. Hi, John! 
const userHi = 'Hi, ' + user + '!'; /** bendro isprusimo ateiciai - vardo kreipinys iš ė --> e;  a---> a; ir t.t.*/
console.log(userHi);
const userBacktick = `Hi, ${user}!`;
console.log(userBacktick);