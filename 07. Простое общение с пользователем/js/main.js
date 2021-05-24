'use strict';

// alert('Hello'); 

// const result = confirm("Are you here?");
// console.log(result);

// const answer = prompt("Вам есть 18?", "Да");
// console.log(typeof(answer));

// От пользователя всегда придет строка

// prompt - string
// +prompt - number

// const answer = +prompt("Сколько вам лет? ", "22");
// console.log(answer + 10); // 22 + 10 = 32

const answers = [];

answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Сколько вам лет', '');
answers[2] = prompt('С какого вы города?', '');

document.write(answers);