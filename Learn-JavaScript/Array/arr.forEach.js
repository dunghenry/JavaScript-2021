const array1 = ["a", "b", "c"];

array1.forEach((element) => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"
//Syntax
// Arrow function
forEach((element) => {  } )
forEach((element, index) => {  } )
forEach((element, index, array) => {  } )

// Callback function
forEach(callbackFn)
forEach(callbackFn, thisArg)

// Inline callback function
forEach(function callbackFn(element) {  })
forEach(function callbackFn(element, index) {  })
forEach(function callbackFn(element, index, array){  })
forEach(function callbackFn(element, index, array) {  }, thisArg)