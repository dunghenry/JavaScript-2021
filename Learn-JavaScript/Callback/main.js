function sum(a, b) {
    return a + b;
}
function subtraction(a, b) {
    return a - b;
}
function calculation(a, b, callback) {
    return callback(a, b)
    
}
console.log(calculation(2, 3, sum))

console.log(calculation(5, 2, subtraction))

//Truyền arrow function
console.log(calculation(2, 3, (a, b) => {
    return a * b;
}))

console.log(calculation(10, 2, function (a, b) {
    return a / b;
}))

//setTimeout(callback, timer)

setTimeout(function(){console.log("Hello")}, 5000)