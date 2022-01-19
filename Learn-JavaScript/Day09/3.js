// !Callback?
// Là hàm được truyền qua đối số khi gọi hàm khác
// 1, Là hàm
// 2,Được truyền qua đối số
function myFunction(param){
    console.log(param);
}
myFunction("Hello world");

function myFunction1(param){
    if(typeof param === "function"){
        param("Hello everyone");
    }
}
function myCallback(value){
    console.log("Value: ", value);
}
myFunction1(myCallback);

var courses = [
    "JS",
    "HTML/CSS",
    "PHP",
    "C++",
]
function myFunction2(course){
    console.log(course);
}
courses.map(myFunction2)

courses.map(function(course){
    console.log(course);
})

var htmls = courses.map(function(course){
    return`
        <h2>${course}</h2>`
});
console.log(htmls.join(""));