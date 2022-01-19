// Làm việc với array

var language = [
   "PHP",
    "JS",
    "C++",
]
console.log(language.toString());
// !Tách thành chuỗi

console.log(language.join(" "));
// TODO Giữ các phần tử có dấu cách

console.log(language.pop());
//? Xóa phần tử cuối mảng và đưa ra element bị xóa
console.log(language);

console.log(language.push("C"));
//TODO Hiển thị ra số phần tử trong mảng và thêm một hoặc nhiều phần tử vào cuối mảng
console.log(language);

console.log(language.shift());
//? Xóa phần tử đầu tiên của mảng
console.log(language);

console.log(language.unshift("Java", "Python"));
//! Hiển thị ra số phần tử của mảng và thêm một hoặc một số phần tử vào đầu mảng
console.log(language);

language.splice(1, 1);
// 1 là vị trí xóa, 1 là số lượng phần tử muốn xóa
console.log(language);

language.splice(1, 0, "Ruby");
// Thêm phần tử vào vị trí thứ nhất và cũng có thể thêm nhiều phần tử vào
console.log(language);

// !Concat dùng để nối mảng
var language2 = [
    "C",
    "Ruby",
    "JS",
    "Java",
]
console.log(language.concat(language2));

// TODO Slice cắt mảng
console.log(language2.slice(1,2));

console.log(language2.slice(0));
// !Dùng copy mảng

console.log(language2.slice(-2,-1));
// Lấy phần tử theo chiều âm




