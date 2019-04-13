/* You have a sequence of strings, and you’d like to determine the most frequently occurring string in the sequence. It can be only one.

Input: non empty Array of strings.

Output: a string. */

"use strict";

function mostFrequent(data) {

    
  let dataWithCount = data.reduce(  (count, data)=> { 
    if (data in count) {
    count[data]++;
  }
  else {
    count[data] = 1;
  }
  return count;
}, {});    


 return Object.entries(dataWithCount).reduce((prev, current) =>{return prev[1] > current[1] ? prev: current })[0];
}

var assert = require('assert');

if (!global.is_checking) {
    console.log('Example:')
    console.log(mostFrequent([
        'a', 'b', 'c', 
        'a', 'b',
        'a'
    ]))
    
    assert.equal(mostFrequent([
        'a', 'b', 'c', 
        'a', 'b',
        'a'
    ]), 'a')
    assert.equal(mostFrequent(['a', 'a', 'bi', 'bi', 'bi']), 'bi')
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}