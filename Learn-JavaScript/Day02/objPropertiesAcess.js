var Person = {
    name: "A",
    age: 20,
    address: "Ninh Bình",
    talk: function () {
        return (this.name + " talk about " + this.address + ". Age " + this.age)
    }
}
console.log(Person)
console.log(Person.talk())

const { name, age } = Person
console.log(name)
console.log(age)
const { talk } = Person
console.log(talk.bind(Person)())

const { address, ...other } = Person
console.log(other)