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
    let isValid=true;
    let message = '';
    let countNumbers = 0;
    let countLetters = 0;
   
        if(str.length < 8){
            isvalid = false;
            return message = "Password is less than 8 characters"
        }
        while(isvalid){
        for (let element in str.split('')){
            if (element == ' '){
                isvalid = false;
                return message = "No spaces allowed"
            }
            if(element.toLowerCase() != element.toUpperCase()){
                countNumbers++;
            }
            else if (element == element.toUpperCase()){
                countNumbers++;
            }

            if(countLetters<1)    {
                isvalid = false;
                return message = "Should be at leat one uppercase letter"
            }    
            if(countNumbers<1){
                isvalid = false;
                return message = "Should be at leat one number"
            }
        };
}

let result = foo ('aabbbaccaa');
console.log(result);