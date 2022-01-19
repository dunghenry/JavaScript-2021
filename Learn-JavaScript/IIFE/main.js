//! Arrow function
(() => {
    console.log("Hello")
})()
// Function
    ; (function () {
        console.log("Hi")
    })()

// ? Note IIFE là private
let i = 0;
; (function myf() {
    i++;
    console.log(i);
    if (i < 10) myf();
})();
//
+function myf() {
  i++;
  console.log(i);
  if (i < 10) myf();
}();

const app = (function () {
    const cars = []
    return {
        add(car) {
            cars.push(car);
        },
        edit(index, car) {
            cars[index] = car;
        },
        delete(index) {
            cars.splice(index, 1);
        }
    }
})()