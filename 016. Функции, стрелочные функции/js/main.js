'use strict';

/*
    Function declaration: fucntion foo() {};
    Function expression: let foo = function() {};
    Arrow function: () =>
*/


// Если внутри функции не находит (пр. переменную) - то идет на уровень выше

let num = 20; // Глобальная переменная
function showFirstMessage(text) {
    console.log(text);
    let num = 10; // Локальная переменная
    console.log(num); // 10
}
showFirstMessage('Kek');
console.log(num); // 20



function calc(a, b) {
    return (a+b);
}
console.log(calc(5,6)); // 11



function ret() {
    let num = 50;
    return num;
}
const anotherNum = ret();
console.log(anotherNum); // 50


const logger = function() {
    console.log('Hello');
};

logger();



const calculator = (a,b) => {
    console.log('Ok');
    return a + b;
};
calculator();