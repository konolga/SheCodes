/* In computer science and discrete mathematics, an inversion is a pair of places in a sequence where the elements in these places are out of their natural order. So, if we use ascending order for a group of numbers, then an inversion is when larger numbers appear before lower number in a sequence.

Check out this example sequence: (1, 2, 5, 3, 4, 7, 6) and we can see here three inversions
- 5 and 3; - 5 and 4; - 7 and 6.

You are given a sequence of unique numbers and you 
should count the number of inversions in this sequence. */

"use strict";

function countInversion(sequence){
    var count = 0
    for (var i = 0; i < sequence.length; i++) {
      for (var j = i; j < sequence.length; j++) {
        if (sequence[i] > sequence[j]) {
          count++
        }
      }
    }
    return count
  }

var assert = require('assert');

if (!global.is_checking) {
    console.log("Example:");
    console.log(countInversion([1, 2, 5, 3, 4, 7, 6]));
    
    assert.equal(countInversion([1, 2, 5, 3, 4, 7, 6]), 3, "Example");
    assert.equal(countInversion([0, 1, 2, 3]), 0, "Sorted");
    assert.equal(countInversion([99, -99]), 1, "Two numbers");
    assert.equal(countInversion([5, 3, 2, 1, 0]), 10, "Reversed");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}