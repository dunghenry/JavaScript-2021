var numbers = [1, 2, 3, 4, 5, 6, 7, 8]
numbers.forEach(function (value, index) {
    console.log("Value: " + value)
    console.log("Index: " + index)
})
//Map trả về mảng mới
var newNumbers = numbers.map(function (value) {
    return value * 2;
})
newNumbers.forEach(function (value) {
    console.log(value)
})
console.log(newNumbers)

var evenNumbers = numbers.filter(function (value) {
    return value % 2 == 0
})
console.log(evenNumbers)

evenNumbers.forEach(function (value) {
    console.log(value)
})

let persons = [
    { id: 1, name: 'John', age: 20 },
    { id: 2, name: 'Dũng', age: 10 },
    { id: 3, name: 'Nam', age: 30 },
]

let search = persons.filter(function (person) {
    return person.name === "Dũng"
})
console.log(search)
search.forEach(function (person) {
    console.log("Id: " + person.id +", Name: " + person.name +", Age: " + person.age)
})