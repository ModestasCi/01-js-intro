console.clear();
/*
    Kiek duotame (imtinai) intervale yra skaiciu,
    kurie dalijasi be liekanos is duoto daliklio.
*/

function rangeDivide(from, to, divider) {
    if (typeof from !== 'number' || !isFinite(from)) {
        return 'ERROR: pirmas parametras turi buti normalus skaicius.';
    }
    if (typeof to !== 'number' || !isFinite(to)) {
        return 'ERROR: antras parametras turi buti normalus skaicius.';
    }
    if (typeof divider !== 'number' || !isFinite(divider)) {
        return 'ERROR: trecias parametras turi buti normalus skaicius.';
    }
    if (divider <= 0) {
        return 'ERROR: trecias parametras negali buti mazesnis uz viena (1).';
    }

    let count = 0;  // pirma, kas dazniausiai

    for (let i = from; i <= to; i++) {
        if (i % divider === 0) { /**desimtainius nuo sveikuju atskiriam*/
            count++;
        }
    }

    // return `Skaičių intervale tarp ${from} ir ${to}, besidalijančių be liekanos iš ${divider} yra ${count} vienetai.`;
    return count;
}

// console.log(rangeDivide());
// console.log(rangeDivide(0));
// console.log(rangeDivide(0, 11));
// console.log(rangeDivide(0, 11, undefined));
// console.log(rangeDivide(0, undefined, 3));
// console.log(rangeDivide(undefined, 11, 3));
// console.log(rangeDivide(0, 11, null));
// console.log(rangeDivide(0, null, 3));
// console.log(rangeDivide(null, 11, 3));
// console.log(rangeDivide(0, 11, [3]));
// console.log(rangeDivide(0, [11], 3));
// console.log(rangeDivide([0], 11, 3));
// console.log(rangeDivide(0, 11, true));
// console.log(rangeDivide(0, true, 3));
// console.log(rangeDivide(true, 11, 3));
// console.log(rangeDivide(0, 11, ''));
// console.log(rangeDivide(0, '', 3));
// console.log(rangeDivide('', 11, 3));
// console.log(rangeDivide(0, 11, NaN));
// console.log(rangeDivide(0, NaN, 3));
// console.log(rangeDivide(NaN, 11, 3));
// console.log(rangeDivide(-Infinity, 11, 3));
// console.log(rangeDivide(0, Infinity, 3));
// console.log(rangeDivide(0, 11, Infinity));

// console.log(rangeDivide(0, 11, 3), '->', 'Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.');
// console.log(rangeDivide(0, 11, 5), '->', 'Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.');
// console.log(rangeDivide(0, 11, 7), '->', 'Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.');
// console.log(rangeDivide(8, 31, 3), '->', 'Skaičių intervale tarp 8 ir 31, besidalijančių be liekanos iš 3 yra 8 vienetai.');
// console.log(rangeDivide(8, 31, 5), '->', 'Skaičių intervale tarp 8 ir 31, besidalijančių be liekanos iš 5 yra 5 vienetai.');
// console.log(rangeDivide(8, 31, 7), '->', 'Skaičių intervale tarp 8 ir 31, besidalijančių be liekanos iš 7 yra 3 vienetai.');
// console.log(rangeDivide(-18, 18, 3), '->', 'Skaičių intervale tarp -18 ir 18, besidalijančių be liekanos iš 3 yra 13 vienetai.');
// console.log(rangeDivide(-18, 18, 5), '->', 'Skaičių intervale tarp -18 ir 18, besidalijančių be liekanos iš 5 yra 7 vienetai.');
// console.log(rangeDivide(-18, 18, 7), '->', 'Skaičių intervale tarp -18 ir 18, besidalijančių be liekanos iš 7 yra 5 vienetai.');

console.log(rangeDivide(0, 11, 3), '->', 4);
console.log(rangeDivide(0, 11, 5), '->', 3);
console.log(rangeDivide(0, 11, 7), '->', 2);
console.log(rangeDivide(8, 31, 3), '->', 8);
console.log(rangeDivide(8, 31, 5), '->', 5);
console.log(rangeDivide(8, 31, 7), '->', 3);
console.log(rangeDivide(-18, 18, 3), '->', 13);
console.log(rangeDivide(-18, 18, 5), '->', 7);
console.log(rangeDivide(-18, 18, 7), '->', 5);

console.log(rangeDivide(-18, 18, 0), '->', 0);
console.log(rangeDivide(-18, 18, -7), '->', 5);

console.log(rangeDivide(18, -18, 7), '->', 5);
console.log(rangeDivide(-2, 2, 0.5), '->', 9);
console.log(rangeDivide(-2.5, 3.5, 2), '->', 3);
console.log(rangeDivide(-1_000_000_000, 1_000_000_000, 2), '->', 1_000_000_001); /** su underscore galima skaitomuma pagerint */