let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const [one, two, ...rest] = numbers
console.log(one);
console.log(two);
console.log(rest);

let [number1, number2] = new Set([1, 2, 3, 4, 5]);
console.log(number1);
console.log(number2);
let [a, b, c] = "abc";
console.log(a);

const user = {};
[user.name, user.address] = "Dung NinhBinh".split(" ");
console.log(user);