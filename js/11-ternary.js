console.clear();
/** TERNERY (supaprastintas if-as) .
 * kaip jis matomas
 * tarsi (if)-o klausimas ? ka daryti kai true : ka daryti kai false;
*/

//1 IF variantas
const laimejo = false;
let pinigine = 10;
if (laimejo) {
    pinigine += 20; /** pridedam laimeta suma 20 */
} else {
    pinigine -= 1;
}
console.log(pinigine);

//2 IF supaprastintas variantas
const pergale = true;
let zinute = 'Sveikinu, tu laimejai!'; /** by default zinute */
if (!pergale) { /** cia tinka supaprastinimas 1 varinate netinka */
    zinute = 'Ups.. Bandykite kita karta!';
}
console.log(zinute);

//3 TERNARY. tinka tik vienos reiksmes manipuliavimui. kaii yra daugiau netinka
const lotteryWin = false;
const wallet = 10 + (lotteryWin ? 20 : -1); /** vienoje eilute aprasomi abu variantai kaip pirmam variante. klaustukas ? klausia ar lottertyWin=true-pridedam 20; false-1*/
console.log(wallet);  //  dvitaskis : apraso priesingu(false/true) atveju.  

const msgWin = true;
const msg = msgWin ? 'Sveikinu!' : 'Ups...';
console.log(msg);