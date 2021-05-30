'use strict';

let str = 'some';
let strObj = new String(str); // Никто не использует new String()

console.log(typeof(str));
console.log(typeof(strObj));

console.dir([1,2,3]);

const soldier = {
    health: 400,
    armor: 200,
    sayHello: function() {
        console.log('Hello');
    }
};

const john = Object.create(soldier); // современный формат

// const john = {
//     health: 100,
// };

// john.__proto__ = soldier; // старый метод, не используется

// Object.setPrototypeOf(john, soldier); // современный формат


john.sayHello();