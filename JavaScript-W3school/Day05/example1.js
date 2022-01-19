const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFunction);

// document.getElementById("demo").innerHTML = numbers2;

// function myFunction(value) {
//   return value * 2;
// }

// document.getElementById("demo").innerHTML = numbers2;

// function myFunction(value, index, arr) {
//   return value * 2;
// }

// const numbers3 = [45, 4, 9, 16, 25];
// const numbers4 = numbers3.filter(myFunction);

// document.getElementById("demo").innerHTML = numbers4;

// function myFunction(value, index, arr) {
//   return value > 10;
// }

var numbers = [1, 2, 3, 4, 5];

// let sum = numbers.reduce(myFunction, 100);
// document.getElementById("demo").innerHTML = sum;

// function myFunction(total, value) {
//     return total + value;
//   }

// let sum1 = numbers.reduce(myFunction);
// document.getElementById("demo").innerHTML = sum1;

// function myFunction(total, value) {
//     return total + value;
// }


// let check = numbers.every(myFunction);
// document.getElementById("demo").innerHTML = check;

// function myFunction(value){
//     return value > 19;
// }

let check1 = numbers.some(myFunction);
document.getElementById("demo").innerHTML = check1;

function myFunction(value){
    return value > 2;
}