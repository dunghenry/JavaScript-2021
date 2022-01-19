// For loop

// for(var i = 0; i <= 1000; i++){
//     console.log(i);
// }
// In ra số từ 0 đến 1000

var myArray = [
    "JS",
    "C++",
    "C",
    "PHP",
]
// Tạo mảng language

for(var i = 0; i < myArray.length; i++){
    console.log(myArray[i]);
}
//! Nên gán lenght của mảng vào một biến

// Đối tượng trong mảng
var myInfor = {
    name: "Trần Dũng",
    age: 20,
    address:" Ninh Bình",
}
// Tạo mảng đối tượng

for(var key in myInfor){
    console.log(myInfor[key]);
}
// Lấy ra các value trong myInfor

// !Ví dụ
var language = "Javascript";
console.log(language[0]);
// Lấy ra kí tự đầu tiên của chuỗi

for(var key in language){
    console.log(language[key]);
}
// Lấy ra kí tự

// !For/of

var language = [
    "JS",
    "PHP",
    "C++",
    "C",
]

for(var value of language){
    console.log(value);
}
// Lấy ra tên các môn học

var myInfor1 = {
    name: "Trần Dũng",
    age: 20,
    adress: "Ninh Bình",
}

console.log(Object.values(myInfor1));
// Trả về mảng value

console.log(Object.keys(myInfor1));
// Trả về mảng key

for(var value of Object.values(myInfor1)){
    console.log(value);
}
// Trả về value

// for(var value of Object.values(myInfor1)){
//     console.log(myInfor1);
// }
// Trả về 3 lần mảng đối tượng






