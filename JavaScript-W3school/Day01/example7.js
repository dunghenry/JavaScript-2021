// TODO Cách dử dụng const

const PI = 3.14;
// PI = 12 // error
// ! Không được gán lại giá trị cũng như thực hiện toán tử

// ? Dùng const cho mảng cố định

const cars = ["Saab", "Volvo", "BMW"];
console.log(cars);
cars.push("Toyota");
cars.unshift("Honda");

const car = {type: "Fiat", model: 500, color: "white"};
// Mảng đối tượng
car.color = "black";
// Thay đổi thuộc tính color
car.style = "Sport";
//Thêm thuộc tính
console.log(car);

var x = 10;

{
    const x = 20;
}
console.log(x);
// x nhận giá trị là 10

console.log(carName);
const carName = "Volvo";
// error
