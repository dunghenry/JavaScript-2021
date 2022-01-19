let str = "Please locate where 'locate' occurs!";
console.log(str.indexOf("locate"));
// Tìm kiếm
console.log(str.indexOf("locate", 10));
// Tìm kiếm chuỗi từ vị trí thứ 10
let str1 = "Please locate where 'locaTe' occurs!";
console.log(str1.lastIndexOf("locate"));
console.log(str1.lastIndexOf("locate", 15));
// Tìm kiếm chuỗi sau cùng

console.log(str1.search("locate"));
// Tìm kiếm chuỗi
console.log(str1.match(/ate/g));
// Chỉ lấy chuỗi ate thường
console.log(str1.match(/ate/gi));
// Tìm ate kể cả chữ hoa thường
// Trả về mảng

console.log(str1.includes("locate"));
console.log(str1.includes("locate", 10));
// true, false

console.log(str.startsWith("Please", 0));
console.log(str.endsWith("occurs!"));
console.log(str.endsWith("occurs!", 36));
// ! True / false

var fullName = "Trần Dũng";
// console.log();
if(fullName.indexOf("Trần")==-1){
    console.log("Không tìm thấy chuỗi");
}
else{
    console.log("Tìm thấy chuỗi");
}
