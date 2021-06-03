'use strict';

// id
const box = document.getElementById('box');
console.log(box);

// tagname: div, button ...
const btns = document.getElementsByTagName('button');
console.log(btns[0]);

// class
const circles = document.getElementsByClassName('circle');
console.log(circles);

const hearts = document.querySelectorAll('.heart');
hearts.forEach(item => {
    console.log(item);
});

// выводит самый первый селектор
const oneHeart = document.querySelector('.heart');
console.log(oneHeart);

