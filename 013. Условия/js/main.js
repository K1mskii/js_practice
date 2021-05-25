'use strict';

if (1) {
    console.log('Ok');
} else {
    console.log('Error');
}

const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Many');
} else {
    console.log('Ok');
}


// Тернарный оператор ?
(num === 50) ? console.log('Ok') : console.log('Error');
// Если num равняется 50, то выполняется OK, иначе Error

// Унарный оператор +

// Switch case - строгое сравнение
const nuM = 50;

switch (nuM) {
    case 49:
        console.log('Неверно');
        break;
    case 48:
        console.log('Неверно');
        break;
    case 51:
        console.log('Неверно');
        break;
    case 50:
        console.log('В точку');
        break;
    default:
        console.log('Не в этот раз');
        break;
}