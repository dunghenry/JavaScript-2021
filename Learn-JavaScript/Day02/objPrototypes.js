function Person(id, name, age) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.info = function () {
        const space = " "
        console.log(this.id + space + this.name + space + this.age)
    }
    this.changeName = function (newName) {
        this.name = newName;
    }
}

Person.prototype.address = "HÀ NỘI"
var ps1 = new Person(1, "TVA", 20);
console.log(ps1.address)

Person.prototype.fullInfor = function () {
    console.log(this.name + " " + this.address)
}
ps1.fullInfor();