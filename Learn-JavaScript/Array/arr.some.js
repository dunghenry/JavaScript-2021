const array = [1, 2, 3, 4, 5];

// checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// expected output: true

//Syntax
// Arrow function
some((element) => {  } )
some((element, index) => {  } )
some((element, index, array) => {  } )

// Callback function
some(callbackFn)
some(callbackFn, thisArg)

// Inline callback function
some(function callbackFn(element) {  })
some(function callbackFn(element, index) {  })
some(function callbackFn(element, index, array){  })
some(function callbackFn(element, index, array) {  }, thisArg)
