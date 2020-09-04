/**Given two sorted integer arrays nums1 and nums2, 
 * merge nums2 into nums1 as one sorted array
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    if (n == 0)
        return nums1;
    nums1.splice(m, n, ...nums2);
    return nums1.sort((a, b) => {
            return a - b;
        })
    
}; 