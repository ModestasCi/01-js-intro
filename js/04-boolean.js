/*
    BOOLEAN (logine reiksme) 
    true (number -> 1)       
    false (number -> 0)
kintamasis (isSnowing is zemiau esancio kodo) turetu buti klausimo forma.
pvz cons klientoAmzius = true; - nelogiskas derinys
*/

const isSnowing = true;
const isRaining = false;
console.log('Ar sninga?', isSnowing);
console.log('Ar lyja?', isRaining);

// Idomesni atvejai
const luckyNumber = 13;
const luckySentence = `My lucky number is ${luckyNumber}!`; /** template literals? ${luckyNumber} rasom vietoj 13, nes 13 kintamasis */
console.log(luckySentence);

const snowString = `Ar sninga? Ats.: ${isSnowing}.`;
console.log(snowString);
const rainString = `Ar lyja? Ats.: ${isRaining}.`;
console.log(rainString);

const penkiosTiesosSum = true + true + true + true + true;
console.log('Tiesos sum:', penkiosTiesosSum);
const penkiMelaiSum = false + false + false + false + false;
console.log('Melai sum:', penkiMelaiSum);
const penkiosTiesosMulti = true * true * true * true * true; /** 1*1*1*1*1 */
console.log('Tiesos multi:', penkiosTiesosMulti);
const penkiMelaiMulti = false * false * false * false * false; /** 0*0*0*0*0 */
console.log('Melai multi:', penkiMelaiMulti);
const combo = 5 * true - 7 * false; /** 5*1-7*0=5 */
console.log('Combo:', combo);

// Saknis
const saknis81 = 81 ** 0.5; /** cia 0.5= pakelta -1/2 laipsniu */
console.log(saknis81);

const kubineSaknis27 = 27 ** (1 / 3); /** orientuotis i matematikos sintakses taisykles */
console.log(kubineSaknis27);