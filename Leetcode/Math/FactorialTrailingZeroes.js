//Given an integer n, return the number of trailing zeroes in n!.
//https://leetcode.com/problems/factorial-trailing-zeroes/
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
    return n == 0 ? 0 : Math.floor((n / 5) + trailingZeroes(n / 5));
};