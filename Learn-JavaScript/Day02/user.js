export let userName = "Trần Văn Dũng"

const arr = [1, 2, 3]

function tong(x, y) {
    return x + y
}


class Person{
    constructor(id, name) { 
        this._id = id
        this._name = name
    }
    info() {
        console.log("Id : " + this._id + " Name : " + this._name)
    }
}
export default Person;
export {arr as numbers, tong}