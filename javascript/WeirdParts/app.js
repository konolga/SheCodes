function a() {

    function b() {
        console.log("2", myVar);
    }

    b();
}


a();
let myVar = 1;
function validateNonEmpty(inputField) {
    // See if the input value contains any text
    if (inputField.value.length == 0) {
        // The data is invalid, so notify the user
        alert("Please enter a value.");
        return false;
    }
    return true;
}