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
const foo = (str) => {
    let message = '';
    let hasDigits = false;
    const MIN_PASSWORD_LENGTH = 8;
    const CODE_0 = 48;
    const CODE_9 = 57;

    if (str.length < MIN_PASSWORD_LENGTH) {
        message += `Password is less than ${MIN_PASSWORD_LENGTH} characters\n`
    }
    if (str.includes(' ')) {
        message += 'No spaces allowe\n';
    }
    if (str.toLowerCase() == str) {
        message += 'Should be at least one uppercase letter\n';
    }
    for (let index = 0; index < str.length; index++) {
        const charCode = str[index].charCodeAt(0);
        if (charCode >= CODE_0 && charCode <= CODE_9) {
            hasDigits = true;
            break;
        }
    }
    if (!hasDigits) {
        message += 'Should be at least one number\n'
    }
    return message || 'Password is valid'
}

let result = foo('aabaa');
console.log(result);