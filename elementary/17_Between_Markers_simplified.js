/* You are given a string and two markers (the initial one and final). You have to find a substring enclosed between these two markers. But there are a few important conditions.

This is a simplified version of the Between Markers mission.

The initial and final markers are always different.
The initial and final markers are always 1 char size.
The initial and final markers always exist in a string and go one after another. */

"use strict";

function betweenMarkers(text, begin, end) {
    // returns substring between two given markers
    return text.slice(text.indexOf(begin)+1, text.indexOf(end))
}

var assert = require('assert');

if (!global.is_checking) {
    console.log('Example:')
    console.log(betweenMarkers('What is >apple<', '>', '<'), 'apple')

    assert.equal(betweenMarkers('What is >apple<', '>', '<'), 'apple')
    assert.equal(betweenMarkers('What is [apple]', '[', ']'), 'apple')
    assert.equal(betweenMarkers('What is ><', '>', '<'), '')
    assert.equal(betweenMarkers('>apple<', '>', '<'), 'apple')
    console.log("Coding complete? Click 'Check' to review your tests and earn cool rewards!");
