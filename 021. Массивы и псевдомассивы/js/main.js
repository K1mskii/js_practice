'use strict';

const arr = [1, 2, 3, 6, 8];

// Конец массива
// pop - удаляет элемент в конце массива
// arr.pop();
// push - добавляет элемент в конец массива
// arr.push(10);

// console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Можно использовать break, continue
for (let value of arr) {
    console.log(value);
}

// Более подробно можно настроить forEach
arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

/* Методы перебора
    arr.forEach
    arr.map
    arr.every/some
    arr.filter
    arr.reduce
*/

/* Методы массивов
    arr.push('a') - добавляет элемент в конец массива
    arr.pop() - удаляет последний элемент из массива и возвращает его
    arr.shift() - удаляет из массива первый элемент и возвращает его
    arr.unshift('a') - добавляет элемент в начало массива
    arr.split(s) - превращает строку в массив, s - разделитель
    arr.join(s) - превращает массив в строку, s - разделитель
    delete arr[1] - удаляет второй элемент
    arr.splice(index, count, elem1...) - удаляет count элементов, начиная с index и заменить на элементы elem1...
    arr.slice(begin, end) - копирует часть массив с begin до end не включая
    arr.sort(fn) - сортировка массива
    arr.reverce() - меняет порядок элементов на обратный
    arr.concat(item1...) - создает новый массив, в который копируются элементы из arr, а также item1... 
*/

// const str = prompt('', '');
// const products = str.split(', ');
// products.sort();
// console.log(products);
// console.log(products.join('; '));




// const array = [2,13, 26, 8, 10];
// array.sort(); // сортирует в строку
// console.log(array); // 10, 13, 2, 26, 8

const array = [2,13, 26, 8, 10];
array.sort(compareNum); // сортирует в строку
console.log(array); // 2, 8, 10, 13, 26

function compareNum(a, b) {
    return a - b;
}