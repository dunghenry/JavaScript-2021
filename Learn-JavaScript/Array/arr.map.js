// creates a new array 
const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map((x) => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

//Syntax
// Arrow function
map((element) => {  })
map((element, index) => {  })
map((element, index, array) => {  })

// Callback function
map(callbackFn)
map(callbackFn, thisArg)

// Inline callback function
map(function callbackFn(element) {  })
map(function callbackFn(element, index) {  })
map(function callbackFn(element, index, array){  })
map(function callbackFn(element, index, array) {  }, thisArg)