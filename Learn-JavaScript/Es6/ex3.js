var arr = ["Js", "C", "C++"];
var [a, b, c] = arr;
console.log(a, b, c)

var course = {
    name: "JS",
    price: 1000,
    image: "img1",
    children: {
        name: "React"
    },
    description: 'value',
}
var { name: parentName, children: {name : childrenName} } = course;
console.log(childrenName);
console.log(parentName)

var { name, description = 'default' } = course;
console.log(description);