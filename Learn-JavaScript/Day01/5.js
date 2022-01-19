// !Toán tử ++ và --
// ?Tiền tố là đặt ++ trước biến còn hậu tố là đặt sau và -- cũng tương tự

var a = 5;
var output = ++a;
// TODOViệc 1 +1 cho a, a = a + 1; a = 6
// ?Việc 2 trả về a sau khi cộng 1
console.log("Output: ", output);

var b = 7
var output1 = b--;
// !Việc 1 b copy, b(copy) = 7;
// TODO Việc 2 trừ 1 của b, b = b - 1, b = 6;
// ?Việc 3 Trả về b(copy);
console.log("Giá trị của b: ", b);
console.log("Output1: ", output1);

var number = 10;

var output2 = number++ + --number;
// !10 + 10;
console.log("Output2: ", output2);