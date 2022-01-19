class Person{
    constructor(id) {
        this._id = id
    }
    info() {
        console.log("ID : " + this._id)
    }
    infoArrow = () => {
        console.log("ID Arrow : " + this._id);
    }
}
let person = new Person(1)
console.log(person)
setTimeout(person.info.bind(person), 5000)

//
setTimeout(person.infoArrow, 5000)