/* For the input of your function, you will be given one sentence. 
You have to return a corrected version, that starts with a capital
 letter and ends with a period (dot).

Pay attention to the fact that not all of the fixes are necessary.
 If a sentence already ends with a period (dot), then adding
  another one will be a mistake. */

  "use strict";

function correctSentence(text) {
        // returns a corrected sentence which starts with capital letter
    // and ends with dot.
    const lastIndex =  text.lastIndexOf(".")===text.length-1? text.length-1: text.length
    return text[0].toUpperCase() + text.slice(1, lastIndex)+".";
}

var assert = require('assert');
if (!global.is_checking) {
    console.log('Example:')
    console.log(correctSentence("greetings, friends"))

    // These "asserts" using for self-checking and not for auto-testing
    assert.equal(correctSentence("greetings, friends"), "Greetings, friends.")
    assert.equal(correctSentence("Greetings, friends"), "Greetings, friends.")
    assert.equal(correctSentence("Greetings, friends."), "Greetings, friends.")
    assert.equal(correctSentence("hi"), "Hi.")
    assert.equal(correctSentence("welcome to New York"), "Welcome to New York.")
    
    console.log("Coding complete? Click 'Check' to earn cool rewards!");
}
