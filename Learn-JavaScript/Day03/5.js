// !1,Số và làm việc với số
var age = 20;
var PI = 3.14;

var otherNumber = new Number(9);
console.log(typeof otherNumber);

var result = 20 / 'ABC';
console.log(result);
console.log(isNaN(result));

var result2 = 20 / 2;
console.log(isNaN(result2));

// !2,Làm việc với số
var myString = age.toString();
console.log(typeof myString);

// TODO toFixed làm tròn
// !Quy tắc làm tròn nếu nhỏ hơn 0.5 thì làm tròn dưới và ngược lại
console.log(PI.toFixed());
var x = 100.123342332;
console.log(x.toFixed(2));
