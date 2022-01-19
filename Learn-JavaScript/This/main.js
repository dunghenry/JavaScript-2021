console.log(this)
 //! Windown
function hello(name) {
    console.log(this)
    //! Windown

    // "use strict";
    // console.log(this)
    //Undefind do có use strict
    console.log(`Hello ${name}`)
}
hello("dũng")

let person = {
    id: 1,
    info: function() {
        console.log(this)
    }
}
person.info() 

let person2 = {
    id: 2,
    name: "NO"
}
person.info.call(person2)

var helloBin = hello.bind(person2)
helloBin("Dũng")

var infoBin = person.info.bind(person2)
infoBin()

setTimeout(infoBin, 3000)

let func = person.info.bind(person)
setTimeout(func, 2000)