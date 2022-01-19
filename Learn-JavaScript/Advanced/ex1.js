// IIFE
(function () {
    console.log("Hello");
})();
    
//Arrow function
(() => {
    console.log("Hi");
})();

let i = 0
;(function myFunction() {
    i++
    console.log(i)
    if (i < 10)
        myFunction()
})()

//Du lieu private
const app = (function () {
    const cars = []
    return {
        get(index) {
            return cars[index]
        },
        add(car) {
            cars.push(car)
        },
        edit(index, car) {
            cars[index] = car;
        }, 
        delete(index) {
            cars.splice(index, 1);
        }
    }
})()