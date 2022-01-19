var x = 15;

var z = ++x + x++;
//++x = 15 sau đó + x++ thì lúc này giá trị của x ngầm hiểu là 16 và x++ thì là 17
// ! 15 + 17
console.log(z);

function myFunction(x1, x2){
    return x1 * x2;
}
// Function
console.log(myFunction(2, 3));
// Gọi ra để sd function

const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};
// Mảng đối tượng bao gồm cả function
console.log(person.fullName());