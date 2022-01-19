const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const check = (value) => value < 10 
console.log(arr.every(check))//true 

//Syntax
every((element) => {  } )
every((element, index) => {  } )
every((element, index, array) => {  } )

// Callback function
every(callbackFn)
every(callbackFn, thisArg)

// Inline callback function
every(function callbackFn(element) {  })
every(function callbackFn(element, index) {  })
every(function callbackFn(element, index, array){  })
every(function callbackFn(element, index, array) {  }, thisArg)