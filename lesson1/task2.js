/*  Напишите функцию `reverse(str)`, которая получает строку, и "разворачивает" ее, 
то есть возвращает новую строку, состоящую из символов первой в обратном порядке.*/

'use strict';
const foo = (str) =>{
    let result=str.split('').reverse().join('');
    return result;
};

let result = foo ('aabbbaccaa');
console.log(result);
