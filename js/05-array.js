/*
    ARRAY (list, sąrašas, matrix, matrica, masyvas)
    "supaprastintas" objektas
*/

const emptyArray = [];
console.log(emptyArray);

const marks = [10, 2, 8, 4, 6, 9];
console.log(marks);
const usersNames = ['Petras', 'Maryte', 'Jonas', 'Ona'];
console.log(usersNames);
const boolList = [true, false, true, true, false, false];
console.log(boolList);

// LABAI NEREKOMENDUOTINA MIKSUOTI SKIRTINGO TIPO REIKSMES MASYVE
// NEBENT ZINOT KA DAROM IR NORIM TAUPYTI VIETA (RAM)
//            [vardas, amzius, ar vedes]
const combo1 = ['Jonas', 99, true]; /** jei galiu pagristi, galima vartot */
const combo2 = ['Maryte', 87, false]; /** kitu atveju patogiau vartot vienodo tipo reiksmes */

const marksCount = marks.length; /** .lenght - apslaiciuoja reiksmiu kieki ats 6 */
console.log(marksCount);         /** pvz ko negalima ---> const let = 5; */
const userCount = usersNames.length;
console.log(userCount);
const boolCount = boolList.length;
console.log(boolCount);

const comboCount = combo1.length;
console.log(comboCount);

const emptySize = emptyArray.length; /** masyvo.lenght negali buti desimtainis.by default tuscias array = 0 */
console.log(emptySize);  /** pvz masyvo.length-negalima*/

// pozicijos indeksas:
//             0  1   2   3
const money = [5, 10, 20, 5];
console.log('Kupiuros:', money);

let wallet = 0; /** keiciam const i let */

wallet += money[0];  /** su += pridedam sekanti po saves */
wallet += money[1];
wallet += money[2];
wallet += money[3];

console.log('Wallet:', wallet, 'pinigu');

//              0   1  2  3  4    5
const marks2 = [10, 2, 8, 4, 6];
let marksSum = 0;
marksSum += marks2[0]; 
marksSum += marks2[1];
marksSum += marks2[2];
marksSum += marks2[3];
marksSum += marks2[4];
/** marksSum += marks2[5];  NaN (tipo ne skaicius) reiksme, nes nera 5tos reiksmes masyve */

console.log('Marks sum:', marksSum);

console.log(marks2[5]); /** cia uzklausus kokia padetis, gaunam reiksme ----> undefined */

const x = 30 + undefined;  /*** skaicius + ne skaicius ir gauname NaN. Kad nebutu NaN reikia ,kad kodas butu prilygintas kazkokiam skaiciui */
console.log(x);  

const abc = ['a', 'b', 'c', 'd', 'e', 'f'];

// Abecele: a, b, c, d, e, f.   <---siekiamas rezultatas
const separator = ', ';
const ending = '.';
let abcString = 'Abecele: ';

abcString += abc[0] + separator;     /** rasome vietoje abcString += abc[0]; */
abcString += abc[1] + separator;     /**                abcString += ', '; */
abcString += abc[2] + separator;
abcString += abc[3] + separator;
abcString += abc[4] + separator;
abcString += abc[5] + ending;

console.log(abcString);