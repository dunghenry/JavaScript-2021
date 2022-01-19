function counter() {
    let count = 0;
    function stepUp() {
        count++;
        return count;
    }
    return stepUp;
}
var up = counter();
console.log(typeof (up))
console.log(up())
console.log(up())
console.log(up())

function xinchao() {
    var str = "Hello"

    function hi(name) {
        console.log(str + " - " + name)
    }
    return hi;
}
let display = xinchao();
display("Nam")
xinchao()("Dũng");