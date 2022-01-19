function sum(a, b) {
    if (b === undefined)
        b = 0
    return a + b;
}
console.log(sum(1));
console.log(sum(1, 3));

function sumArr() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++)
        sum += arguments[i];
    return sum;
}
console.log(sumArr(1, 2, 3, 4, 5));

function sumArr1(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++)
        sum += arr[i];
    return sum;
}
console.log(sumArr1([1, 2, 3, 4, 5]))

function hieu(a = 1, b = 10) {
    return b - a;
}
console.log(hieu(5));
(function tong(a, b) {
  console.log(a + b);
})(2, 1);