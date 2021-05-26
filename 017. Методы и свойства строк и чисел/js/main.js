'use strict';

const str = "test";
console.log(str.length); // 4
console.log(str.toUpperCase()); // TEST
console.log(str.toLowerCase()); // test

const arr = [1,2,4];
console.log(arr.length); // 3

const array = [1,2,4];
console.log(array[2]); // 4

const fruit = 'Some fruit';
console.log(fruit.indexOf("fruit")); // 5
console.log(fruit.indexOf("q")); // -1

const logg = "Hello world";
console.log(logg.slice(6, 11)); // world
console.log(logg.slice(6)); // world
console.log(logg.slice(-5, -1)); // worl
console.log(logg.substring(6, 11)); // world  - substring - не принимает отрицательные значения
console.log(logg.substr(6, 5)); // world substr - сколько символов хотим вырезать

const text = "Привет мир, я снова тут";
console.log(text.slice(12,23)); // я снова тут


const num = 12.2;
console.log(Math.round(num)); // 12 - округлилось до ближайшего целого числа


const test = "12.2px";
console.log(parseInt(test)); // 12 - стал целым цисловым типом данных
console.log(parseFloat(test)); // 12.2