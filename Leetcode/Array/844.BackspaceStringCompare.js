/*
Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

Note that after backspacing an empty text, the text will continue empty.



Example 1:

Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".
*/
var backspaceCompare = function(s, t) {
    const newS = [];
    const newT = [];
    for (let i=0; i<=s.length; i++){
        s[i]!=="#" ? newS.push(s[i]) : newS.pop();
        }
    for (let i=0; i<=t.length; i++){
        t[i]!=="#" ? newT.push(t[i]) : newT.pop();
        }
   return newS.join() === newT.join();
};
console.log(backspaceCompare(s = "ab#c", t = "ad#c"));