//Given an array, rotate the array to the right by k steps, where k is non-negative.


//Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.
//Could you do it in-place with O(1) extra space?


//in-place with O(1)
var rotate = function (nums, k) {
    nums.splice(0, 0, ...nums.splice(nums.length - k, k));
};

var rotate = function (nums, k) {
    while (k) {
        nums.unshift(nums.pop())
        k--
    }
};


//O(n^2)?

var rotate = function (nums, k) {
    let length = nums.length;
    nums.reverse();
    nums = nums.slice(0, k).reverse().concat(nums.slice(k, length - k).reverse())
};