const array1 = ["a", "b", "c"];
const iterator = array1.values();

for (const value of iterator) {
  console.log(value);
}

for (const index in array1) {
   console.log(index)
}
// expected output: "a"
// expected output: "b"
// expected output: "c"

//Syntax
// values();
