/**
 * Definition for isBadVersion()
 * Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one, 
 * which causes all the following ones to be bad.

 * You are given an API bool isBadVersion(version) which returns whether version is bad.
 * Implement a function to find the first bad version. You should minimize the number of calls
 * to the API

 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
//Binary Search
var solution = function (isBadVersion) {
    return function (n) {
        let left = 0;
        let right = n;

        while (left <= right) {
            let mid =  Math.floor(left + (right - left)/2);
            if (isBadVersion(mid)) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }
}

//Time complexity : O(logn). The search space is halved each time. 
//Space complexity : O(1).

var solution = function (isBadVersion) {
    return function (n) {
        let ver = 0;
        while (ver <= n) {
            if (isBadVersion(ver)) {
                return ver;
            }
            ver++;
        }
    };
};

return function (n) {
    let left = 1;
    let right = n;
    while (left < right) {
        let mid = Math.floor(left + (right - left) / 2);
        if (isBadVersion(mid)) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }
    return left;
};