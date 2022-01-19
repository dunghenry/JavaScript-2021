var x = 10e5;
// 10 mũ 5
// console.log(x);
var y = 10e-5;
// 10 mũ -5
// console.log(y);
var k = "100";
var l = "10";
// ! Các phép toán như trừ, nhân, chia sẽ được chuyển đổi chuỗi thành số để thực hiện toán tử còn phép cộng sẽ không thể chuyển đổi chuỗi thành số để thực hiện toán tử
// console.log(k-l);
// console.log(k*l);
// console.log(k/l);

// console.log(k+l);
// ! Kết qủa là 10010 và nhận chuỗi 

// ? NaN không phải là một số
var s = 100 / "Apple";
// !NaN
var m = 100 / 10;
// console.log(s);

// TODO Kiểm tra có là số hay không
// console.log(isNaN(s));
// console.log(isNaN(m));
// Kiểm tra trả về true false

// console.log(typeof(s));
// Kq là number

// Phép chia cho 0 là Infinity(Vô cực)

var n = 1.3407807929942597e+1548 * 1.3407807929942597e+154;
console.log(n);
console.log(typeof(n));
// number

// ! Hệ thập lục phân
var h = 0xFF;
console.log(h);
// Chuyển đổi cơ số
var number = 32;
console.log(number.toString(10));
console.log(number.toString(32));
console.log(number.toString(16));
console.log(number.toString(8));
console.log(number.toString(2));
// Chuyển về các hệ 
// ! Số có thể là đối tượng

var Number1 = 20;
var a = new Number(20);
console.log(a);
console.log(Number1);
console.log(Number1==a);
console.log(Number1===a);
var b = new Number(20);
console.log(a===b);
// 2 object ko thể so sánh


