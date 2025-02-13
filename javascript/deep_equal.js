var deepEqual = function (valueA, valueB) {
    // short way
    // return JSON.stringify(valueA) === JSON.stringify(valueB);

    // alternatevly check per type
    if (typeof valueA !== typeof valueB) {
        return false;
    }
    if (typeof valueA !== 'object') { // primitives
        return valueA === valueB;
    }
    if (valueA === null || valueB === null) { // null is object in JS
        return true;
    }
    if (Array.isArray(valueA) !== Array.isArray(valueB)) {
        return false;
    }
    if (Object.keys(valueA).length !== Object.keys(valueB).length) {
        return false;
    }
    // recursively check nested objects
    for (let key in valueA) {
        if (!deepEqual(valueA[key], valueB[key])) {
            return false;
        }
    }
    return true;
};

deepEqual('43');
module.exports = deepEqual;