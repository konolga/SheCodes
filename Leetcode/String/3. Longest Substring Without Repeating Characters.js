const string = "aaaa"

var lengthOfLongestSubstring = function (s) {

    if (s.length <= 1) return s.length;
    let max = 0;
    let seenWindow = new Array();

    for (let left = 0; left < s.length; left++) {
        const currentChar = s[left];
        if (seenWindow.indexOf(currentChar) >= 0) {
            seenWindow.splice(0, seenWindow.indexOf(currentChar)+1);
        }
        seenWindow.push(currentChar);
        max = max < seenWindow.length ? seenWindow.length : max;
    }
    return max;
};

console.log(lengthOfLongestSubstring(string));