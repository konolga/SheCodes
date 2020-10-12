/**
 *Given an integer, write a function to determine if it is a power of three.
 *
 */
var isPowerOfThree = function (n) {
    if (n == 1 || n == 3) return true;
    let sum = n.toString().split('').reduce((acc, val) => {
        return acc + parseInt(val);
    }, 0)
    if (sum == 9) return true;

    return false;
};


//since we know maxPowerOfThree = 3^19 = 1162261467;
var isPowerOfThree = (n) => {
    return n > 0 && (1162261467 % n == 0);
}


// iterative
var isPowerOfThree = (n) => {
    if (n > 1) {
        while (n % 3 == 0) {
            n /= 3;
        }
    }
    return n == 1
}

//recursive
var isPowerOfThree = (n) => {
    if (n == 1) return true;
    if (n === 0 || n % 3 !== 0) return false;
    return isPowerOfThree(n / 3);
}