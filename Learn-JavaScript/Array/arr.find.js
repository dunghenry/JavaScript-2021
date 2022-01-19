const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

console.log(found);//12
//Trả về phần tử đầu tiên lớn hơn 10

//Syntax
find((element) => {  } )
find((element, index) => {  } )
find((element, index, array) => {  } )

// Callback function
find(callbackFn)
find(callbackFn, thisArg)

// Inline callback function
find(function callbackFn(element) {  })
find(function callbackFn(element, index) {  })
find(function callbackFn(element, index, array){  })
find(function callbackFn(element, index, array) {  }, thisArg)