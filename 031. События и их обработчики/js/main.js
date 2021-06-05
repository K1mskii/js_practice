'use strict';

const btn = document.querySelector('.btn'),
    overlay = document.querySelector('.overlay'),
    btns = document.querySelectorAll('.btn');

// Лучше не использовать
// btn.onclick = function() {
//     alert('Click');
// };

// btn.addEventListener('click', () => {
//     console.log('Ok');
// });

// btn.addEventListener('click', () => {
//     console.log('Second ok');
// });

// btn.addEventListener('mouseleave', () => {
//     console.log('MouseLeave');
// });

// btn.addEventListener('mouseenter', () => {
//     console.log('MouseEnter');
// });

let i = 0;
const deleteElement = (e) => {
    // console.log(e.currentTarget); 
    // Сначало идет во вложенном элементе - событие, а потом родителя
    console.log(e.target);
    console.log(e.type);
    // i++;
    // if(i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);



const link = document.querySelector('a');

link.addEventListener('click', (e) => {
    e.preventDefault(); // отменили стандартное поведение браузера

    console.log(e.target);
});


btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true});
});