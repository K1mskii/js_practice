'use strict';

// const obj = new Object(); Лучше не использовать так

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test');
    }
};

options.makeTest();


// Деструктуризация
const {border,bg} = options.colors;
console.log(border);

// Вывод name
console.log(options.name);

// Удаление из объекта
delete options.name;
console.log(options);

// Перебираем в объекте
let counter = 0;
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}
console.log(counter);

// Ключи объекта
console.log(Object.keys(options).length);