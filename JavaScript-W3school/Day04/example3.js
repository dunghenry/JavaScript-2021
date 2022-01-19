var x = [5, 4, 6, 0];
// console.log(x.sort());
// Xếp tăng dần
// console.log(x.reverse());
// Đảo ngược mảng lại

x.sort(function(a, b){
    return a - b;
})
// console.log(x);
// ! Xếp tăng

x.sort(function(a, b){
    return b - a;
})
// 
// console.log(x);
// ! Xếp giảm

x.sort(function(a, b){
    return 0.5 - Math.random()
})
// console.log(x);
// Hàm random
// ? Tìm max min

function myArrayMax(arr){
    return Math.max.apply(null, arr);
}
// Tìm max
console.log(myArrayMax(x));

function myArrayMin(arr){
    return Math.min.apply(null, arr);
}
// Tìm min
console.log(myArrayMin(x));