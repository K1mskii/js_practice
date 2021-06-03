'use strict';

const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('heart'),
    wrapperHearts = document.querySelector('.hearts');


box.style.backgroundColor = 'blue';
box.style.width = '300px';

// box.style.cssText = `background-color: ${}; width: ${}px`;

btns[1].style.borderRadius = '100%';
circles[1].style.backgroundColor = 'red';

// for(let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');


div.classList.add('click');

// div.innerHTML = 'dsdas';
div.innerHTML = "<h1 style='title'>Hello World</h1>";
div.style.color = 'black';

// div.insertAdjacentHTML('beforebegin',  '<h2>Hello</h2>');

// div.textContent = 'Hello'; // только текст
// div.style.color = 'black';

// wrapperHearts.append(div); // Современный - в конец
// wrapperHearts.prepend(div); // Современный - в начало

// hearts[0].before(div);

// circles[0].remove(); // удаление элемента

hearts[0].replaceWith(circles[0]);


// Старый формат
wrapperHearts.appendChild(div);

wrapperHearts.insertBefore(div, hearts[1]);

wrapperHearts.removeChild(hearts[1]);

wrapperHearts.replaceChild(circles[0], hearts[0]);