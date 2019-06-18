/* Напишите функцию `setPassword(password)`, которая запрашивает у пользователя пароль
 для регистрации и проверяет:
- что длина пароля больше 8 символов
- что в пароле есть хотя бы 1 цифра
- что в пароле есть хотя бы 1 буква в верхнем регистре
- что в пароле нет пробелов.

Если пароль подходит – вывести сообщение об успешной установке пароля,
 иначе – вывести все причины ошибки.
Может пригодиться метод строк: `charCodeAt()`
Перебор строки – с помощью циклов for / while. */

'use strict';
const foo = (str) =>{
    let hasNumber=false;
    let hasUpperLetter=false;
    let hasNoSpace=false;

    while(!hasNoSpace&&!hasUpperLetter&&!hasNoSpace){
        for (let element in str.split('')
           {
if (element)
           }
};
}

let result = foo ('aabbbaccaa');
console.log(result);
