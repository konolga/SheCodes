/**Given two strings s and t , write a function to determine if
 *  t is an anagram of s.
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    let hashMap = {};

    [...s].map(c => hashMap[c] ? hashMap[c] + 1 : 1);
    [...t].map(c => hashMap[c] ? hashMap[c] - 1 : -1);

    return Object.values(hashMap).every(v => !v);
};

var isAnagram = function(s, t) {
    if (s.length !== t.length) return false
    return s.split('').sort().join('') === t.split('').sort().join('');
};
