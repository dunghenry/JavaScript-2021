// !Làm việc với chuỗi
var myString = "         Học JS tại F8! JS JS JS J";

// 1.Length
console.log(myString.length);

// 2.Find index
console.log(myString.indexOf("JS"));
//? Tìm đc chuỗi JS ở vị trí thứ 4 và chỉ tìm đc chuỗi JS đầu tiên

console.log(myString.indexOf("JS",6));
// !Tìm chuỗi JS đầu tiên sau vị trí 6

console.log(myString.lastIndexOf("JS"));
// TODO Tìm chuỗi JS ở vị trí cuối cùng

console.log(myString.indexOf("123"));
// Nếu ko tìm được thì trả về -1

if(myString.indexOf("JS")!=-1){
    console.log("Tìm thấy chuỗi");
}
else{
    console.log("Không tìm thấy chuỗi");
}

if(myString.search("JS")!=-1){
    console.log("Tìm thấy chuỗi");
}
else{
    console.log("Không tìm thấy chuỗi");
}

// !3,Cut srting
// Cắt chuỗi
console.log(myString.slice(4));
console.log(myString.slice(4,6));

var mystring  = "Hello"
console.log(mystring.slice(-4, -1));

// 4, Replace
console.log(myString.replace("JS","Javascript"));
console.log(myString.replace(/JS/g,"Javascript"));
// Thay thế chuỗi

// !5,Convert to upper case
console.log(myString.toUpperCase());

// !6,Convert to lower case
console.log(myString.toLowerCase());

// TODO Trim
console.log(myString.trim());
// Loại bỏ khoảng trắng ở hai đầu

// 8, Split
var language = "JS, PHP, Ruby";
console.log(language.split(", "));

// 9 Get a character by index
console.log(typeof mystring.charAt(2));
console.log(mystring[1]);

 