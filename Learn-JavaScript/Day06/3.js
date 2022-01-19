// !Đối tượng date
var date = new Date();
// Trả vef đối tượng
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();

console.log(date);

console.log(year);
console.log(month);
console.log(day);

console.log(`${day}-${month}-${year}`);