'use strict';

// defer должен обрабатывать страницу в фоновом режиме. Никогда не блокирует страницу
// async не ждут другие скрипты


const paragh = document.querySelectorAll('h1');
console.log(paragh);



function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script);
}

loadScript("js/test.js");
loadScript("js/some.js");