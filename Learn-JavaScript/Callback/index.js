function callback(n) {
    return n * n;
}

function myf(callback, n) {
    if (typeof callback === "function") return callback(n) * n;
}
console.log(myf(callback, 10));

function cube(callback, n) {
    return callback(n) * n;
}
console.log(cube(callback, 3));

//VD 3
function action(x, y, callback) {
    return callback(x, y);
}

function multiplication(x, y) {
    return x * y;
}

function addition(x, y) {
    return x + y;
}
alert(action(10, 10, multiplication)); // output: 100
alert(action(10, 10, addition)); // output: 20