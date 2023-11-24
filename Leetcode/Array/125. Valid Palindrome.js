/**
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let s1 = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let s2 = s1.split("").reverse().join("");
    return s1 === s2;
};

var isPalindrome = function(s) {
  let s1 = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  for (let i = 0, j = s1.length-1; i<j; i++, j--) {
    if (s1[i] !== s1[j]) {
      return false;
    }
  }
  return true;
}