import { userName, tong, numbers} from "./user.js";
console.log(userName);

console.log(tong(2, 3))
console.log(Person)
console.log(numbers)

import * as user from "./user.js";
console.log(user.tong(2, 1))
console.log(user.userName)
import Person from './user.js';
// console.log(Person)
class students extends Person {
    constructor(id, name, age, lop) {
        super(id, name, age);
        this._lop = lop;
    }
    info() {
        super.info();
        console.log(this._lop);
    }
}
const std1 = new students(1, "Dũng", 20, "10b1")
console.log(std1)
std1.info()