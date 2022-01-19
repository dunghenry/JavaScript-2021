// !Khả năng hiển thị: innerHTML, console.log(), document.write(), window.alert()

var x = 10;

document.getElementById("demo").innerHTML = x;
// Gán x vào phần tử có id là demo

console.log(x);
// In ra màn hình console

document.write(x);
// In x ra màn hình
alert(x);
// Tạo thanh thông báo khi refresh

function myFunction(){
    document.write(x);
}
// Hàm