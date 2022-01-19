var cars = ["Honda", "Toyota", "Saab", "Volvo"];
var keys = cars.keys();
var text = "";
for (let x of keys) {
  text += x + "<br>";
  
}
console.log(text);
document.getElementById("demo").innerHTML = text;
// ! Đưa ra vị trí phần tử mảng
