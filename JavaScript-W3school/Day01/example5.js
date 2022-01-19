// ! Cách sử dụng var
x = 10;
var x;
console.log(x);
var y = "5" + 2 + 3;
console.log(y);
// ! Nhận chuỗi 

var z = 2 + 3 + "5";
console.log(z);
// ?=> Toán tử bình thường sau khi gặp chuỗi thì tính chuỗi

var _firstName = "Dũng";
console.log(_firstName);
var $ = 20;
console.log($);
// ! Trong juery thì $("p") là chọn tất cả các phần tử p

var Name = "Trần" + " " + "Dũng";
console.log(Name);

var z = 10;
{
    var z = 20;
}
console.log(z);
// ? z sẽ nhận giá trị khai báo lại là 20

carName = "Saab";
var carName;
console.log(carName);
// ? Cho lên đầu khối rồi mới khởi tạo
