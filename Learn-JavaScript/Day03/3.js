// Chuỗi
var fullName = new String("Trần Văn Dũng");
var fullName = "Trần Văn Dũng";

console.log(typeof fullName);
// TODO Kiểm tra kiểu dữ liệu

console.log("Trần Văn \"Dũng\"");
// Thêm dấu ngoặc kép

console.log("Trần Văn Dũng\\");
// !Thêm dấu \

console.log(fullName.length);
// ?Kiểm tra độ dài của chuỗi

// !Template string ES6
var firstName = "Dũng";
var lastName = "Trần";
console.log("Tôi là: ", firstName +" "+ lastName);

console.log(`Toi la: ${firstName}${" "}${lastName}`);
