class Person {
  constructor(name, age, male) {
    this.name = name;
    (this.age = age), (this.male = true);
  }
  print() {
    return this.name + " " + this.age + " " + this.male;
  }
}
const mai = new Person("Mai", 20, false);
const dung = new Person("Dung", 20, true);
console.log(dung.print());
//Mảng class trong js khác hoàn toàn vs typescript
const person = [new Person("mai", 20, false)];
console.log(person);
