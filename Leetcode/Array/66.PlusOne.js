/**Given a non-empty array of digits representing a non-negative integer, 
 * increment one to the integer.

The digits are stored such that the most significant digit is at the head 
of the list, and each element in the array contains a single digit.

You may assume the integer does not contain any leading zero, except the
 number 0 itself.

 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let increment = 1;
    for (let index = digits.length - 1; index >= 0; index--) {
        digits[index] = digits[index] + increment;
        digits[index] = (digits[index] == 10) ? (increment = 1, digits[index] = 0) : (increment = 0, digits[index]);
    }

    if (increment) {
        digits.unshift(1);
    }
    return digits;
};