/**Given a 32-bit signed integer, reverse digits of an integer.
 * Assume we are dealing with an environment that could only store integers 
 * within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this 
 * problem, assume that your function returns 0 when the reversed integer overflows.
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const reversed =  Math.sign(x) * parseInt([...Math.abs(x).toString()].reverse().join('')) ;
    const max32BitInteger = 2**31 - 1;  // or 0x7fffffff or 2147483647
    const min32BitInteger = -max32BitInteger; // or -0x80000000 or -2147483648
    
    return (reversed <= max32BitInteger && reversed >= min32BitInteger) ? reversed : 0;
};