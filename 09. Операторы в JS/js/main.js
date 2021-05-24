'use strict';

console.log('arr' + ' - object'); // arr - object
console.log(4 + ' - object'); // 4 - object
console.log(4 + +'5'); // 9
console.log(4 + '5'); // 45


let incr = 10,
    decr = 10;
incr++; // Инкремент увеличение на ед.
decr--; // Декримент уменьшение на ед.
// ++incr; // Префиксная форма записи
// --decr; // Постфиксная форма записи
console.log(incr);
console.log(decr);



let incR = 10;
let decR = 10;
console.log(++incR); // 11
console.log(--decR); // 9


console.log(5%2); // 1 остаток от деления

console.log(2*4 == 8); // true
console.log(2*4 == '8'); // true
console.log(2*4 === '8'); // Строгое сравнение - false
console.log(2*4 === 8); // true

// && - и
// || - или
// '!'- отрицание

// &&
const isChecked = true;
const isClose = true;
console.log(isChecked && isClose); // true


const isCheckeD = true;
const isClosE = false;
console.log(isCheckeD && isClosE); // false


//  ||
const ischecked = true;
const isclose = true;
console.log(ischecked || isclose); // true


const isChecEd = false;
const isCloSe = false;
console.log(isChecEd || !isCloSe); // true

console.log(2 + 2 * 2 === 8); // false
console.log((2+2) * 2 == 8); // true

console.log(2 + 2 * 2 != 8); // true
console.log(2 + 2 * 2 != '6'); // false
console.log(2 + 2 * 2 !== '6'); // true