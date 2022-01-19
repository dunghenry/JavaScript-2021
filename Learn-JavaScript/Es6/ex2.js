function logger({ name, price, ...rest }) {
  console.log(name);
  console.log(price);
  console.log(rest);
}
logger({ name: "Js", price: 2000, description: "This is content" })

function number([a, b, ...rest]) {
    console.log(a);
    console.log(b);
    console.log(rest)
}
number([1, 2, 3, 4, 5]);

var arr1 = ['Js', 'C', 'C++'];
var arr2 = ['PHP', 'Ruby'];
var arr3 = [...arr1, ...arr2];
console.log(arr3)

console.log(arr1.concat(arr2))

var arr = ["JS", "C++", "PHP", "C"];
function log(...rest) {
    for (var index = 0; index < rest.length; index++) {
        console.log(rest[index])
        
    }
}
log(...arr);