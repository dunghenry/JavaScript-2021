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
var ps1 = new Person(1, "TVA", 20)
var ps2 = new Person(2, "NVB", 30)
console.log(ps1);
ps1.info();
ps2.info();
ps1.address = "HN"
console.log(ps1);
ps1.changeName("Dũng")
console.log(ps1);