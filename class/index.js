console.clear();
import { Student } from './Student.js'; /**IMPORT APSIRŠO VIRŠUJE KODO. 
Kai suimportuojami vienas ar daugiau dalyku {Student, Math, Teacher,...} <-jie tampa kopija/konstantomis.
---import { Student, Teacher } from './Student.js'; <-kai importuojami du objectAI, kurie yra TIK StudentAS.
---import Studentas from './Student.js'; <-esant poreikiui,jei importuojama i LT is UK(Student)-verčiam į savo kalbą.
---import { Student, Teacher, Math as Matematika } from './Student.js'; <-esant Math poreikiui.
---(const Student = require('./Student');) <-senas nenaudojamas importavimo budas.---Student <-Ka importuot
---import SimpleStudent from './Student2.js'; <-jei yra poreikis susikurt branchINI failiuka
---import * as x from './Student.js'; <-jei norima importuot viska, kai yra daug visko. tas viskas vadinama iksu (x) arba betkoks kitas pasirtinktas pavadinimas.*/
// FUNCION ir CLASS skirtumai
// classES tai lyg function kurios turi konteksta. Lyg budas pateikti koda

// function masyvas. Paprasta funkcija. Neutrali(svarbu ne undefined)
// [5, 5, 9, 10, 8, -50, 9999]

// class masyve galima apskaiciuoti su skirtingu kontekstu.Pvz:
    // class Student{[{name: 'Antanas', marks: [5, 5, 9, 10, 8], -50}, 
/**cia -50/9999 nelimpa i kontekta.eliminuojam aprasant logika, antraip gausim NaN arba jei irassom string gausim undefined.*/
    // { name: 'Vardenis', marks: [5, 5, 9, 10, 8] },
    // { name: 'Ona', marks: [5, 5, 9, 10, 8] },]}

/**Esminis skirtumas nuo function yra tai,kad yra zodis class(tarsi zodis function),tada yra zodis
Student(tarsi classĖS ir function mano sugalvotas pavadinimas).F-ja su Student(), classESE() nerasomas
---() -parametru blokas*/

/** KAS YRA CLASS
Atitinkama aliuzija/palyginimas,kad i class reiketu ziureti kaip i receptūrą :D,instrukcija, 
kaip pagaminti,kaip pagaminus turi veikti/atrodyti.perskaicius recepta(recepto nesuvalgysi)/brezini(nepastatysi).
Tai kas gaminama,kas veikia(blynas/lektuvas etc) yra objektas.*/

const petras = new Student('Petras', 2001);/**-pirmas objektas-->(terminale isspausdina)Student {}.Tas pats kas console.log({});. Del nutylejimo salygos istrinam true.
---{} <-riestiniai skliaustai nurodo kad tai objektas. Logikos blokas.
---Student <-sugalvotas logiškas mano classĖS pavadinimas atitinkamai duomenų kontekstui.Nurodo kokio tipo objektas.
---new Student() <-instrukcija kaip kurti dalyka kuris vadinasi Student. Kiekvieno Student 
atsinesama individuali informacija aprasoma paprastuose skliausteliuose().
---new(specialus keywordAs) <-kviecia classĖJE Student esantį construtorIŲ.Taip su new 
constructorIUI paduodamos reikšmės(šiuo atveju Petras ir Ona).
---('Petras') <-nurodytas argumentas/norimi isspausdint duomenys
Esant poreikiui Student i Studentas, kai yra verciama kalba is UK i LT (gali ir kiti kintamieji verstis).
---new Matematika <-esant poreikiui su Math
---const petras = SimpleStudent('Petras', 1990); <-jei yra poreikis susikurt branchINI failiuka
const petras = new x.Student('Petras', 1990); <-kai iš visko daug, kad neieskot istraukiam norima reiksme.
---const chuck = new Teacher('Chuck', 1980); <-jei norima iš Student.js importuoti du objectUS*/

petras.addMarks(10, 0, 2, 22);
petras.addMark(9); /**addMark-logikos gabalas, kuri reikia paleisti su() */
petras.addMark(5); /** 8-9 cia ranka ivesti duomenys. kiekvienas priskirtas metodas dabar dirbs su konkreciu studentu(sabloniskai) */
petras.addMark(22);
petras.addMark(-22);
petras.addMark(3.14);
petras.addMark(-3.14);
petras.addMark(0);
petras.addMark(NaN);
petras.marks = [10];

console.log(petras.name, petras.getName());
console.log(petras.marks);
console.log(petras.marksAverage());

// console.log(petras); <-nereikalingi tolimesniam kodui.
/**console.log(chuck); <-kai importuojami du(ar daugiau) objectAi(ar const ir t.t.) iš Student.js
---console.log(x.Math); <-spausdinam importuojant norima objectA. 

// Pavyzdziai su Math-turi savyje integruota skaičiafkę
---console.log(Math.floor(5, 999)); terminale spausdina 5. Apvalina i mazesne pusę.
---console.log(Math.max(5, 9)); terminale 9 */

// console.log(petras.name, petras.marksAverage2);