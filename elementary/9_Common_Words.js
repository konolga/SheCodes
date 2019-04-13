/* Let's continue examining words. You are given two string with words
 separated by commas. Try to find what is common between these strings. 
The words are not repeated in the same string.

Your function should find all of the words that appear in both strings.
 The result must be represented as a string of words separated by commas
  in alphabetic order. */

  "use strict";

function commonWords(first, second) {
    first = first.split(',');
    second = second.split(',');
    
return first.filter(str1=> second.find(str2 => str1 ===str2)).sort().join(',')
    
}
var assert = require('assert');

if (!global.is_checking) {
    assert.equal(commonWords("hello,world", "hello,earth"), "hello", "Hello");
    assert.equal(commonWords("one,two,three", "four,five,six"), "", "Too different");
    assert.equal(commonWords("one,two,three", "four,five,one,two,six,three"), "one,three,two", "1 2 3");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}

