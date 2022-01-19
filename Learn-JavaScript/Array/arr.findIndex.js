const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber));
// expected output: 3
//Trả về vt của phần tử đầu tiên lớn hơn 13

//Syntax
// Arrow function
findIndex((element) => {  } )
findIndex((element, index) => {  } )
findIndex((element, index, array) => {  } )

// Callback function
findIndex(callbackFn)
findIndex(callbackFn, thisArg)

// Inline callback function
findIndex(function callbackFn(element) {  })
findIndex(function callbackFn(element, index) {  })
findIndex(function callbackFn(element, index, array){  })
findIndex(function callbackFn(element, index, array) {  }, thisArg)
