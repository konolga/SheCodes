
function flattenArray(nestedArr) {
    let result = [];
    nestedArr.forEach((a) => {
        if (Array.isArray(a)) {
            result.push(...flattenArray(a));
        }
        else { result.push(a) }
    })

    return result;
}

function flattenObject(nestedObject) {
    let result = {};

    for (let key in nestedObject) {
        const curr = nestedObject[key];
        if (typeof curr === 'object') {
            result = { ...result, ...flattenObject(curr) }
        }
        else {
            result = { ...result, [key]: curr }
        }

    }
    return result;
}

// nested objects
flattenArray([1, [2, [3]]]); // [1, 2, 3];
flattenObject({ a: 1, b: { c: 2, d: { e: 3 } } }); // { a: 1, c: 2, e: 3 }

export { flattenArray, flattenObject };
