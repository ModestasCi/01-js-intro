console.clear();
/* REST (yra dvi rusis logiku. cia aprasoma pirmoji) operatorius - surenka likusias nepaimtas 
reiksmes destrukturizuojant */
/** [...arguments] - senas vartiojimas. ...args - naujas vartojimas */
/** ...(daugtaskio) logika priklauso nuo konteksto. SPREAD iskopijuoja viska ka turi. REST paimti 
 * viska, ko nepaemiau destrukturizuodamas */
const marks = [10, 2, 8, 4, 6];
const [first, second, ...visiKiti] = marks; /** ...visiKiti =RESTas sudes visus likusius nepaimtus 
is masyvo  */
// const [...visiKiti] = marks; //ribinis atvejis kai abu veikia-
// const visiKiti = [...marks]; // indentiskai
console.log(marks);
console.log(first);
console.log(second);
console.log(visiKiti);

const person = {
    name: 'Petras',
    age: 99,
    isMarried: true,
    favorite: {
        color: 'red',
        number: 13,
        artist: 'Spice Girls'
    }
}
const { age, isMarried, ...other } = person;
console.log(age, isMarried);
console.log(other);

// 2 parametrai
function sum(a, b) {
    console.log('ARGS', a, b, arguments, [...arguments]); /** su arguments galima pasiekt visus 
    argumentus. [...arguments] masyve duoda atitikama masyva */
    return a + b;  /** pasimokyt kas tie ARGUMENTS */
}

const s1 = sum(7, 5);
console.log(s1);

// 1 parametras (array), bet su daug reiksmiu
function arraySum(list) {
    let totalSum = 0; /** pirma apsirasomas kintamasis */
    for (let i = 0; i < list.length; i++) {
        // const number = list[i];
        // totalSum += number;
        totalSum += list[i]; /** supaprastintas virsutiniu dvieju eiluciu uzrasymo budas */
    }
    return totalSum; /**vietoj return 0; */
}
const s2 = arraySum([10, 2, 8, 4, 6]); /** norima sukurti funkcija kuri gali priimti neribota 
kieki skaiciu, su kuriais reikia atlikti operacija, siuo atvju sum */
console.log(s2);

// uzduotis, norima sudeti. Destytojui PATINKKA, pasimokyt perprast. Geriau skaitomas/suprantamas/logiskas nesu su ...arguments
function sudetis(...args) { /** ...args =surenka viska kas liko i bendra masyva */
    let total = 0;
    for (let i = 0; i < args.length; i++) { /** taip pat kaip 1 parametras pavyzdyje */
        total += args[i];
    }
    return total;
}

const s3 = sudetis(10, 2, 8, 4, 6); /** cia nebera masyvas */
console.log(s3);


/** su [...arguments] =globalus kintamasis, kuris priima viska */
function product() { /** rasomm vietoj function product(...args) */
    let total = 1; /** keiciam let total = 0; nes sandauga is 0 yra 0 */

    for (let i = 0; i < [...arguments].length; i++) { /** rasomm vietoj args.lenght  */
        total *= [...arguments][i]; /** rasomm vietoj args[i]  */
    }
    return total;
}

const s4 = product(10, 2, 8, 4, 6);
console.log(s4);