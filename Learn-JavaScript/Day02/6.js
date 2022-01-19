// Number type
var a = 1;
console.log(a);

// !String type
var fullName = "Trần \"Dũng\"";
console.log(fullName);
// TODO Boolean type
var isSuccess = true;
// ?Undefined type
var age;
console.log(age);
// !Null
var isNull = null;
// nothing
console.log(isNull);
// TODO Symbol
var id = Symbol('id');
var id2 = Symbol('id');
// unique
console.log(id == id2);
// Function
var myFunction = function(){
    alert("Hello world");
}
myFunction();

// Object
var myObject = {
    name: "Dũng Trần",
    age: 20,
    adress: "Ninh Bình",
    myFunction : function(){

    }
};
console.log("Object: ", myObject);

// Array
var myArray = ["PHP", "C++","JS"];
console.log(myArray);
//!Kiểm tra kiểu dữ liệu
console.log(typeof biến);

var Monan = {
    ten: "thịt kho",
    gia: 20,
}
console.log(Monan);
function monan(ten, gia, nguyenlieu){
    this.ten = ten;
    this.gia = gia;
    this.nguyenlieu = nguyenlieu;
}
var monan1 = new monan("raumuongxao", 200, "raumuong");
console.log(monan1);

