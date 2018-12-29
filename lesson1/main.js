//Напишите функцию transfor(str)  =>  'aabbbaccaa' => '2a3b1a2c2a'
'use strict';
function Transform(str){
    let result='';
    let count = 1;
    for (let index = 0; index < str.length; index++) {
        const element = str[index];  
        if(element===str[index+1])
        {
            count++;
        }
        else{
            result += +count+element;
            count=1;
        }
    }
    return result;
}

let result = Transform('aabbbaccaa');
console.log(result);
