var hello = document.getElementById("hello");
hello.onclick = function (e) {
  this.style.display = "none";
  // ! this ở đây là hello
};
const person = {
  firstName: "nam",
  age: 20,
  print: function () {
    return "I am is " + this.firstName;
    // ! this ở đây là person
  },
};
alert(person.print());
