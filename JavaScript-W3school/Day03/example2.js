var x = 9.8765;
console.log(x.toExponential(2));
// Làm tròn
console.log(x.toString() + 20);
// Chuỗi

var y = 9.4;
console.log(y.toFixed());
// Lm tròn xuống
console.log(x.toPrecision(3));
// Lấy 3 số và làm tròn

var text = "100";
console.log(text.valueOf()+100);
// Chuỗi
var k = text.valueOf();
console.log(typeof(k));

var h = Number(text);
console.log(typeof(h));

var time = new Date();
console.log(Number(time));

console.log(Number.MAX_VALUE);

console.log(Number.MIN_VALUE);
console.log(Number.POSITIVE_INFINITY);

console.log(Number.NEGATIVE_INFINITY);