/*
    OBJECT (objektas)
    "tikras" objektas
*/

//           [vardas, amzius, ar vedes] pvz tel nr
const user1 = ['Petras', 99, true]; /** pvz 869112 tokiu atveju confuse belekoks */
const user2 = ['Maryte', 87, false];
//norimas rezultatas
// Petras yra 99 metu amziaus.
// Maryte yra 87 metu amziaus.

const user1Name = user1[0];
const user1Age = user1[1];  /** kodo skaitomumas geresnis */
const user1Intro = `${user1Name} yra ${user1Age} metu amziaus.`;
console.log(user1Intro);

const user2Name = user2[0];
const user2Age = user2[1]; /** plus jei masyve (array) sumaisytos reiksmiu vietos  */
const user2Intro = `${user2Name} yra ${user2Age} metu amziaus.`;
console.log(user2Intro);

const emptyObject = {};
console.log(emptyObject);

const student1 = {
    name: 'Jonas',
    age: 99,
    isMarried: false,
    marks: []
};
console.log(student1);

const student2 = {
    age: 69,
    isMarried: true,
    name: 'Ona',
    marks: [10, 2, 8, 4, 6]
};
console.log(student2);

// STANDARTINIS REIKSMES ISTRAUKIMAS IS OBJEKTO -> obj['key']
const stud1Name = student1['name'];
const stud1Age = student1['age'];
const stud1Marks = student1['marks'];
const stud1Status = student1['isMarried'];
console.log(stud1Name);
console.log(stud1Age);
console.log(stud1Marks);
console.log(stud1Status);

const stud2Name = student2['name'];
const stud2Age = student2['age'];
const stud2Marks = student2['marks'];
const stud2Status = student2['isMarried'];
console.log(stud2Name);
console.log(stud2Age);
console.log(stud2Marks);
console.log(stud2Status);

// SUPAPRASTINTA OBJEKTO REIKSMES ISTRAUKIMO SINTAKSE -> obj.key

const car = {
    brand: 'Tesla',
    model: 'S',
    price: 100000,
    currency: 'EUR',
    color: 'red'
}

console.log(car);
console.log(car['brand']); /** senas aprasymo budas, bet nepamirsti kitiem atvejam kai zodziai atskirti - + / * ir pan*/
console.log(car.brand);    /** naujas optimalesnis budas kai vientisas zodis*/
console.log(car['model']);
console.log(car.model);
console.log(car['price']);
console.log(car.price);


// pvz kokiu atveju supaprastinta sintakse apsunkina koda
const obj = {
    simple: 'paprasta reiksme',
    'child-name': 'Johny boy',
    childName: 'Johny boy' /** 1 dalis problemos sprendimo budo */
}
console.log(obj.simple);
console.log(obj.childName); /** 2 dalis problemos sprendimo */
console.log(obj['simple']);
console.log(obj['child-name']);
// console.log(obj.child - name); nevartotinas kodas

console.log('-------------');
// tikslas suzinot pazymiu vidurki 
const student3 = {
    name: 'Ona',
    age: 69,
    isMarried: true,
    marks: [10, 2, 8, 4, 6]
};
const marks = student3.marks;
let sum = 0;                /** vietoj const sum = 0; */
sum += student3.marks[0];  /** vietoj const count = 0; */
sum += student3.marks[1];  /** istraukiam antskira kintamaji .marks, kad */
sum += student3.marks[2];  /** supaprastinti kodo sprendima, nes ne visainfo (vardas, amzius..) reikalinga kartais */
sum += student3.marks[3];
sum += student3.marks[4];
const count = student3.marks.length; /** masyvo kiekis =5 */
const average = sum / count;
console.log('Mark average:', average);

const person = {
    name: 'Petras',
    age: 99,
    children: [    /**  a. jei children: true; */
        {          /**  b. tada nebereikia childrenCount: 3; sie du info vienetai persidengia vienas per kita */
            name: 'Maryte',
            age: 13
        },
        {
            name: 'Jonas',
            age: 27
        },
        {
            name: 'Ona',
            age: 41
        }
    ],
}

console.log(person.children[0].name);
console.log(person.children[0].age);
console.log(person.children[2].name);
console.log(person.children[2].age);
console.log(person.children.length);

/* console.log(person['children'][2]['name']);
   console.log(person.children[0]['name']);
   console.log(person['children'][0].name);
 kiti uzrasymo budai*/
