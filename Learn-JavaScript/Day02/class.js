class Person {
    constructor(id, name) {
        this._id = id,
        this._name = name
        
    }
    fullInfor(){
        console.log(this._id + " " + this._name)
    }
    static hello() {
        console.log("Hello")
    }
    set id(id) {
        
        this._id = id
    }
    get id() {
        return this._id
    }
}
let person = new Person("abc", "Trần Văn A")
console.log(person)
person.fullInfor()
Person.hello()
person.id = 10;
console.log(person.id)

//Kế thừa
class Students extends Person {
    constructor(id, name, lop) {
        super(id, name)
        this._lop = lop
    }
    info() {
        super.fullInfor()
        console.log(this._lop)
    }
}
let student = new Students("abcd", "Trần Văn A", "10B2")
console.log(student)
student.info()