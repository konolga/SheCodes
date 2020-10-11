/**Given two sorted integer arrays nums1 and nums2, 
 * merge nums2 into nums1 as one sorted array
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    if (n == 0)
        return nums1;
    nums1.splice(m, n, ...nums2);
    return nums1.sort((a, b) => {
        return a - b;
    })

};

var merge = function (nums1, m, nums2, n) {
    while (n > 0) {
        if (m >= 0 && nums1[m - 1] > nums2[n - 1]) {
            nums1[m + n - 1] = nums1[m-1];
            m--;
        } else {
            nums1[m + n - 1] = nums2[n-1];
            n--;
        }
    }
};


//nums1 = [1,2,3,0,0,0], m = 3
//nums2 = [2,5,6],       n = 3

