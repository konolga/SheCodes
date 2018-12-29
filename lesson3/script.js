//Сделайте желтыми внешние ссылки, добавив им класс external.
//Все ссылки без href, без протокола и начинающиеся с http://internal.com считаются внутренними.

'use strict';
function MarkYellow(){

    let elements = document.querySelectorAll('a');

    for (let i = 0; i < elements.length; i++) 
    {        if (!elements[i].hasAttribute('href')^elements[i].indexOf('http://internal.com') === 1^elements[i].indexOf('://') ===1)
    {
        elements[i].classList.add('external');
    }
    }
}
MarkYellow();
