/**
 * 191. Number of 1 Bits
 * Write a function that takes an unsigned integer and returns 
 * the number of '1' bits it has (also known as the Hamming weight).
 * 
 * 
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    return n.toString(2).split('0').join('').length;
 };

 var hammingWeight = function(n) {
    return n.toString(2).split('').reduce((a,b) => {return a += Number.parseInt(b)}, 0)
 };

 var hammingWeight = function(n) {
    return n.toString(2).split('0').reduce((a,b) => {return a += b.length}, 0)
 };

 var hammingWeight = function(n) {
    return n.toString(2).split('0').filter(num => num === "1").length;
 };

 