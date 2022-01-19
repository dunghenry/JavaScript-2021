var cars = [];
    cars[0] = "Saab";
    cars[1] = "Volvo";
    cars[2] = "Toyota";
// console.log(cars);
// Khai báo mảng
var cars1 = new Array("Toyota", "Volvo", "Saab");
// console.log(cars1);
delete cars[0];
// Xóa phần tử 0
console.log(cars);
console.log(cars.toString());
console.log(cars.join("*"));
// In ra chuỗi

// ! Thay đổi giá trị một phần tử bất kì
    cars1[0] = "Honda";
    console.log(cars1);
// TODO Đối tượng

const car = {
    color: "white",
    hang : "Honda",
    ten : "Vision",
}
console.log(car);

// ? Thêm phần tử cuối mảng
cars1[cars1.length] = "No";
console.log(cars1);

cars1[10] = "Hello";
console.log(cars1);

var names = ["Dũng", "Hoàng", "Mai"];
// console.log(names.splice(0, names.length));


console.log(names.splice(1, 1, "no", "no1"));

console.log(names);