// write a function to validate a JSON with try catch.

function StrinJson(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

let json = '{ "age": 28 }';
console.log(StrinJson(json));