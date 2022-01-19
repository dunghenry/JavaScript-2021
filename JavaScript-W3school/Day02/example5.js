var x = "Trần Dũng Hi";
// console.log(x.slice(5,9));
console.log(x.slice(-12,-8));
y = x.slice(-12,-8);
console.log(y);
console.log(x.slice(5))
// Cắt chuỗi

console.log(x.substr(0, 4));
// Tương tự slice

var text = "Please visit Microsoft and Microsoft!";
console.log(text.replace("visit", ""));
console.log(text.replace(/Microsoft/g, "delete"));
// ! Thay thế chuỗi có thêm /g thì thay thế tất cả các chuỗi

console.log(text.toLowerCase());
console.log(text.toUpperCase());
// ! Chuyển đổi chữ hoa, chữ thường

// TODO Nối chuỗi
var firstName = "Dũng";
var lastName = "Trần";
console.log(firstName.concat(" ", lastName));

var car = "     Volvo     ";
console.log(car.trim());
//  loại bỏ khoảng trắng

// Hỗ trợ đệm đầu và cuối

var k = "1";
console.log(k.padStart(4, 0));
console.log(k.padEnd(4, 0));

// ! Chuyển chuỗi thành mảng dùng split();

var fullName = "Trần,Văn,Dũng";
var fullName1 = "TrầnVănDũng";
console.log(fullName.split(","));
console.log(fullName1.split(""));
