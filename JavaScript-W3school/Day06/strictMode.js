"use strict";
// Bắt buộc phải khai báo xem biến thuộc kiểu dl nào vd let a, var a,... thường thì khai báo a = 10 vẫn đúng

var a = 10;
console.log(a);

var person = {};
person.name = "dung";
person.age = 20;
console.log(person);
// Đối tượng
var Person = {
  Name: "Nam",
  age: 30,
};
Person.male = true;
console.log(Person);
//
function PERSON(name, age, male) {
  this.name = name;
  this.age = age;
  this.male = male;
}
PERSON.prototype.eyeColor = "blue";
const nam = new PERSON("nam", 29, true);
console.log(nam.eyeColor);
