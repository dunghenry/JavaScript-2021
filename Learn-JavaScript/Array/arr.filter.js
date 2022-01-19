const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

const checkLenghth = words.filter((word) => word.length > 6);

console.log(checkLenghth);
// hiển thị những chuỗi lớn hơn 6 kí tự

//Syntax
filter((element) => {  } )
filter((element, index) => {  } )
filter((element, index, array) => {  } )

// Callback function
filter(callbackFn)
filter(callbackFn, thisArg)

// Inline callback function
filter(function callbackFn(element) {  })
filter(function callbackFn(element, index) {  })
filter(function callbackFn(element, index, array){  })
filter(function callbackFn(element, index, array) {  }, thisArg)
