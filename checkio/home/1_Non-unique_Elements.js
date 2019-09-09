/* You are given a non-empty list of integers (X). 
For this task, you should return a list consisting 
of only the non-unique elements in this list. 
To do so you will need to remove all unique elements
 (elements which are contained in a given list only once).
  When solving this task, do not change the order of the list. 
  Example: [1, 2, 3, 1, 3] 1 and 3 non-unique elements and
   result will be [1, 3, 1, 3] */

   "use strict";


   function nonUniqueElements(data) {
    //map returns new array
     let newData = [];
     data.forEach((element)=>{
        if ( newData.includes(element) //if found any
            || data.lastIndexOf(element)!== data.indexOf(element))//if twice in original array
        {
            newData.push(element)
        } //add another
        
        })
        
        //return data.filter(item => data.indexOf(item) !== data.lastIndexOf(item))
        return newData
}

var assert = require('assert');

if (!global.is_checking) {
    assert.deepEqual(nonUniqueElements([1, 2, 3, 1, 3]), [1, 3, 1, 3], "1st example");
    assert.deepEqual(nonUniqueElements([1, 2, 3, 4, 5]), [], "2nd example");
    assert.deepEqual(nonUniqueElements([5, 5, 5, 5, 5]), [5, 5, 5, 5, 5], "3rd example");
    assert.deepEqual(nonUniqueElements([10, 9, 10, 10, 9, 8]), [10, 9, 10, 10, 9], "4th example");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");