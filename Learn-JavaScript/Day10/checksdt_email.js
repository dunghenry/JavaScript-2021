let email = "trandungksnb00@gmail.com";
let reg = /^\w+@[a-zA-Z]{3,}\.com$/i;
console.log(reg.test(email));
let phone = "0866778584";
let checkTel = /^0\d{2}[-\s]?\d{3}[-\s]?\d{4}$/
console.log(checkTel.test(phone));
// \w+ là chữ hoặc số có thể lặp lại
// /i có thể chữ hoa hay thường
// \d là số
// \s là khoảng trắng
// ? là có hoặc không

let regexName = /^[^\d+]*[\d+]{0}[^\d+]*$/
let name = "Tran Dung";
console.log(regexName.test(name));