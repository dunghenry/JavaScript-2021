// ?Một số hàm built-in
// TODO 1, Alert
var fullName = 'Trần Văn Dũng';
alert(fullName);
// In ra cửa sổ thông báo
// !2, Console
var fullName = 'Trần Văn Dũng';
console.log(fullName);
console.warn(fullName);
// In ra trong màn hình console
// 3, Confirm
confirm('Hello world');
// Xác thực
// !4, porpomt
prompt("Hello world");
// Xác thực kèm theo 1 dòng input
// ?Set timeout
setTimeout(function() {
    alert("Hello everyone");
},2000)
// Sau 2 giây xuát hiện cửa sổ thông báo
// !5, Set interval
setInterval(function() {
    console.log("Hello everyone");
},1000)
// Chạy liên tục không như hàm setTimeout