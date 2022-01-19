
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arr.fill(0, 1, arr.length))//1, 0,  0, 0, 0, 0, 0, 0, 0
//Thay đổi giá trị
//Syntax
fill(value);
fill(value, start);
fill(value, start, end);
//index default 0
//end default ar.length