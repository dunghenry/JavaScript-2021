var fruits = ["Apple", "Orange", "Banana", "Mango", "Apple"];

console.log(fruits.indexOf("Apple") + 1);
// ? Tìm kiếm và đưa ra vị trí phần tử đầu tiên
console.log(fruits.lastIndexOf("Apple") + 1);
// ? Tìm kiếm và đưa ra vị trí phần tử cuối cùng của mảng
console.log(fruits.includes("Banana"));


var numbers = [1, 2, 3, 4, 5];
// var firts = numbers.find(myFunction);

// document.getElementById("demo").innerHTML = firts;
// function myFunction(value){
//     return value > 2;
// }

// ! Return phần tử đầu tiên lớn hơn 2

var firtsIndex = numbers.findIndex(myFunction);

document.getElementById("demo").innerHTML = firtsIndex;
function myFunction(value){
    return value > 2;
}

// ! Return vị trí phần tử lớn hơn 2

// var myArr = Array.from("ABCDEF");
// console.log(myArr);
// // TODO Tách thành mảng

// console.log(fruits.keys());