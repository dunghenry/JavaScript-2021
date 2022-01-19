// ! Operators
var x = 2;
var y = 5;

var z = x ** y;
// ! x mũ y
var h = Math.pow(2, 5);
console.log(h);

console.log(z);
var i = "5" + 5;
// Nhận chuỗi là 55 và là kiểu string
console.log(typeof(i));

var k = "5";

console.log(Boolean(k===y));
// So sánh kiểu dl và gt
console.log(Boolean(k==y));
// So sánh giá trị

var cars = ["Saab", "Volvo", "Honda"];
console.log(cars instanceof Array);
// Kiểm tra xem có phải mảng ko trả về true false

(x > y) ? console.log("True") : console.log("False"); 
// ?Toán tử ba ngôi nếu x>y thì in ra màn hình console là True và ngược lại

var firstName = "Dũng";
var fullName = "Trần ";
fullName += firstName;
// Toán tử cộng bình thường fullName = fullName + firstName
console.log(fullName);

