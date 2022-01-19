var fullName1 = "Trần \"Dũng\"";
// Thêm ngoặc kép cho Dũng
var fullName2 = "Trần 'Dũng' ";
// Thêm ngoặc đơn cho Dũng
let answer3 = 'He is called "Johnny"';
console.log(answer3);
console.log(fullName1);
console.log(fullName2);
console.log(fullName1.length);
// Đếm kí tự của chuỗi
var x = "Hello \\world";
// \\ lấy kí tự \
console.log(x);

var y = "Dũng";
var z = new String("Dũng");
// Type object
console.log(y==z);
//  true
console.log(y===z);
//  y là string còn z là object
// ! Các đối tượng không thể so sánh
var k = new String("Dũng");
console.log(z===k);