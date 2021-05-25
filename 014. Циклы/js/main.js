'use strict';

// While
let num = 50;
while (num <= 55) {
    console.log(num);
    num++;
}


// Do - while
let nuM = 50;
do {
    console.log(num);
    nuM++;
}
while (nuM < 55);


// For
for (let i = 1; i < 8; i++) {
    console.log(i);
}

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        // break;
        continue;
    }
    console.log(i);
}
