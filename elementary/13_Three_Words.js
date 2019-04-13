/* Let's teach the Robots to distinguish words and numbers.

You are given a string with words and numbers separated by whitespaces (one space). The words contains only letters. You should check if the string contains three words in succession. For example, the string "start 5 one two three 7 end" contains three words in succession. */

"use strict";

function threeWords(data) {

     let count = data.split(' ')
                     .reduce((count, current)=>
                     {return  current.match(/[^0-9]/) 
                     ? count+1 
                     :(count>=3 ? count : count = 0) 
                     },0);
 
    return count>=3 ? true : false;
}

//return /\D+\s\D+\s\D+/.test(data);

var assert = require('assert');

if (!global.is_checking) {
    assert.equal(threeWords("Hello World hello"), true, "1st example");
    assert.equal(threeWords("He is 123 man"), false, "2nd example");
    assert.equal(threeWords("1 2 3 4"), false, "3rd example");
    assert.equal(threeWords("bla bla bla bla"), true, "4th example");
    assert.equal(threeWords("Hi"), false, "Letters");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}