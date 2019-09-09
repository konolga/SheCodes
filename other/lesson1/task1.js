/* Написать функцию ACRONYMIZE, которая принимает аргумент-строку, и возвращает ее аббревиатуру (акроним).
Предположим, что все входные данные – строки из нескольких слов, состоящих только из латинских буквы.
Пример: acronymize('learn javascript ru') -> 'L.J.R.' */

'use strict';
const ACRONYMIZE = (str) =>{
    let result=str;
    let regex = /\B[A-Z]+/g;
    return result.toUpperCase().replace(regex, '.');
};

let result = ACRONYMIZE ('learn javascript ru');
console.log(result);

