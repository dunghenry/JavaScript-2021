// ! Cách sử dụng let
let x = 1;
let x = 2;
console.log(x);
// ! Khi dùng let không được khai báo lại nhưng var thì có thể khai báo lại
{
    let y = 2;
    console.log(y)
}
console.log(y);
// ? Khi dùng let trong khối thì không thể truy cập ở ngoài khối còn lại var thì ngược lại

let z = 10;

{
    let z = 20;
}
console.log(z);
// TODO z nhận giá trị 10

var k = 10;
let k = 20; // error

{
    let k = 10;
    let k = 20 // error
}

{
    let k = 10;
    var k = 20; // error
}

let n = 1;

{
    let n = 10;
}

{
    let n = 100;
}
// ? No error

carName = "Saab";
let  carName = "Volvo";
console.log(carName);
// ! Không giống như var có thể đưa lên đầu khối nhưng chưa được khởi tạo
// ?Let không thể khai báo lại