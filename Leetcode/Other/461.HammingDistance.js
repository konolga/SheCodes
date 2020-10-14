 /**
  * The Hamming distance between two integers is the number
  * of positions at which the corresponding bits are different.
  * Given two integers x and y, calculate the Hamming distance.
  * @param {number} x
  * @param {number} y
  * @return {number}
  */
 var hammingDistance = function (x, y) {
     return [...(x ^ y).toString(2)].filter(c => c === '1').length;
 };