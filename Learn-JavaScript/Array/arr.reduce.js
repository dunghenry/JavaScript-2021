const array1 = [1, 2, 3, 4];
const reducer = (previousValue, currentValue) => previousValue + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15

//Syntax
// Arrow function
reduce((previousValue, currentValue) => {  } )
reduce((previousValue, currentValue, currentIndex) => {  } )
reduce((previousValue, currentValue, currentIndex, array) => {  } )
reduce((previousValue, currentValue, currentIndex, array) => {  }, initialValue)

// Callback function
reduce(callbackFn)
reduce(callbackFn, initialValue)

// Inline callback function
reduce(function callbackFn(previousValue, currentValue) {  })
reduce(function callbackFn(previousValue, currentValue, currentIndex) {  })
reduce(function callbackFn(previousValue, currentValue, currentIndex, array){  })
reduce(function callbackFn(previousValue, currentValue, currentIndex, array) {  }, initialValue)