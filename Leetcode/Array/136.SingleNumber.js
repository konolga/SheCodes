/**
 * Given a non-empty array of integers nums, every element appears twice except for one. 
 * Find that single one.
 * 
 * @param {number[]} nums
 * @return {number}
 */
let singleNumber = function (nums) {
    //The find() method returns the value of the first element 
    //in the provided array that satisfies the provided testing function

    return nums.find(element => nums.indexOf(element) === nums.lastIndexOf(element))
};

// Bit Manipulation
// we can XOR all bits together to find the unique number
// a^0=a
// a^a=0
//a^b^a=b^0=b
let singleNumber = function (nums) {
    return nums.reduce((acc, val) => acc ^= val);
}