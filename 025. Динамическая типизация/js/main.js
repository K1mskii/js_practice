'use strict';

// To string

// 1) старый способ
console.log(typeof(String(null))); // string
console.log(typeof(String(4))); // "4"

// 2) concat
console.log(typeof(5 + '')); // string


// Сложения со строкой всегда будет строка

const num = 5;
console.log("https://vk.com/catalog/" + num); // https://vk.com/catalog/5


const fontSize = 26 + 'px';


// To Number - старый способ
// 1
console.log(typeof(Number('4'))); // number

// 2
console.log(typeof(+ '5')); // number

// 3
console.log(typeof(parseInt('15px', 10))); // number

// актуальное применение
// let answer = +prompt('Введите что-то', '');



// To Boolean

// 0, '', null, undefined, NaN - все false, остальное true

// 1)
let switcher = null;
if (switcher) {
    console.log('working...');
} 

switcher = 1;

if (switcher) {
    console.log('working...');
} 

// 2)
console.log(typeof(Boolean('4'))); // boolean

// 3)
console.log(typeof(!!'44444')); // boolean