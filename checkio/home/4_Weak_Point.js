"use strict";

function weakPoint(matrix){
   let rows = [];
   let col = [];
   let res = [];
   
   for (let i = 0; i < matrix.length; i++) {
        rows[i] = matrix[i].reduce((sum, current)=>{return sum+current;},0) //sum entire row in matrix
        col[i] = 0;

        for (let j = 0; j < matrix.length; j++) {
            col[i] += matrix[j][i]; // summ columns one by one
            }
        }
        
    res[0]=rows.indexOf(Math.min(...rows));    
    res[1]=col.indexOf(Math.min(...col));

    
    return res;
}
var assert = require('assert');

if (!global.is_checking) {
    assert.deepEqual(weakPoint([[7, 2, 7, 2, 8],
                                [2, 9, 4, 1, 7],
                                [3, 8, 6, 2, 4],
                                [2, 5, 2, 9, 1],
                                [6, 6, 5, 4, 5]]
                                ), [3, 3], "Example");
    assert.deepEqual(weakPoint([[7, 2, 4, 2, 8],
                                [2, 8, 1, 1, 7],
                                [3, 8, 6, 2, 4],
                                [2, 5, 2, 9, 1],
                                [6, 6, 5, 4, 5]]
                                ), [1, 2], "Two weak point");

    assert.deepEqual(weakPoint([[1, 1, 1],
                                [1, 1, 1],
                                [1, 1, 1]]
                                ), [0, 0], "Top left");
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
}