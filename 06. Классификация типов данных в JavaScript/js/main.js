'use strict';

/*
Простые типы:
-Числа 1,2,3
-Строки "text"
-Логический тип: boolean - (true, false)
-null
-undefined
-Symbol
-BigInt

=========================================

Объекты:

Спецобъекты:
- Массивы []
- Функции function
- Объект Даты
- Регулярные выражения
- Ошибки

Обычные объекты:

*/

// Числа
let number = 4.6; 
console.log(4/0); // infinity - бесконечность
console.log(-4/0); // минус infinity
console.log('string' * 9); // Not a number - не число

// Строка "", '', ``
const persone = "Oleg";

// Boolean
const boolT = true; // True
const boolF = false; // False

// Undefined
let und;
console.log(und); // undefined


// Объект
const obj = {
    name: 'Oleg',
    age: 22,
    isMarried: false
};

// Объекты через точку .

console.log(obj); // {name: "Oleg", age: 22, isMarried: false}
console.log(obj.name); // Oleg
console.log(obj.age); // 22
console.log(obj[name]); // undefined


// Массивы
let arr = ['plum.png', 'orange.jpg', 'apple.bmp', 6, {}, []];
console.log(arr[1]); // orange.jpg