const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length); // 1
// console.log(btns[0].classList.item(0)); // btn
// console.log(btns[0].classList.add('red', 'dsadasdasdsa')); // red
// console.log(btns[0].classList.remove('btn')); 
// console.log(btns[0].classList.toggle('btn'));


// if (btns[0].classList.contains('red')) {
//     console.log('Red');
// }

// btns[0].addEventListener('click', () => {
//     if(!btns[1].classList.contains('red')) {
//         btns[1].classList.add('red');
//     } else {
//         btns[1].classList.remove('red');
//     }
// });


// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         if(!btn.classList.contains('red')) {
//             btn.classList.add('red');
//         } else {
//             btn.classList.remove('red');
//         }
//     });
// });


// Делигирование
wrapper.addEventListener('click', (e) => {
    if (e.target && e.target.matches('button.red')) {
        console.log('Hello');
    }
});

// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log('Hello');
//     });
// });

const btn = document.createElement('button');
btn.classList.add('red', 'btn');
wrapper.append(btn);