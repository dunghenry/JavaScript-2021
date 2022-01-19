var name = "JS";
var price = 1000;
var course = {
    name,
    price,
    getName: function() {
        return name;
    },
    getPrice() {
        return price;
    }
}
console.log(course.getName());

var name = "Name";
var age = "Age";

var infor = {
    [name]: "Dung",
    [age]: 20

}
console.log(infor);