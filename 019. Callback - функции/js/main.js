'use strict';

function first() {
    // Действия
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

                        // Анонимная функция
learnJS('JavaScript', function() {
    console.log('Я прошел этот урок');
});
// или
function done() {
    console.log('Я прошел данный урок!')
}
learnJS('JavaScript', done);