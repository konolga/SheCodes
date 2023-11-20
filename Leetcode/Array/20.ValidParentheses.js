/**
 * @param {string} s
 * @return {boolean}
 Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

 An input string is valid if:

 Open brackets must be closed by the same type of brackets.
 Open brackets must be closed in the correct order.
 Every close bracket has a corresponding open bracket of the same type.
 */ 

const mapBrackets = {
    "{":"}",
    "[":"]",
    "(":")"
};

var isValid = function (s,stack=[]) {
    if (!s)
        return !stack.length;

    let ch = s.charAt(0);

    if (mapBrackets[ch]) // if opening bracket - push it to stack
        stack.push(ch);
    else if (mapBrackets[stack[stack.length - 1]] == ch)  // if closing bracket - remove it from the stack
        stack.pop();
    else
        return false;

    return isValid(s.substring(1),stack);
};

console.log(isValid("()[]{"));


var isValid = function (s) {
    const mapBrackets = {
        "{": "}",
        "[": "]",
        "(": ")"
    };
    let stack = [];
    for (let ch of s) {
        if (mapBrackets[ch]) { // if opening bracket
            stack.push(ch);
        } else {
            if (!stack.length || mapBrackets[stack[stack.length - 1]] !== ch) {
                return false;  // if the stack is empty or not matching brackets
            }
            stack.pop(); // otherwise, pop the opening bracket from the stack
        }
    }
    return !stack.length;
};