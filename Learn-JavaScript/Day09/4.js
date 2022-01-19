// !Callback phần 2
var courses = [
    "JS",
    "C++",
    "C",
    "PHP",
]
Array.prototype.map2 = function (callback) {
    var output = [];
    for (var i = 0; i < this.length; i++) {
        var result = callback(this[i], i);
        // console.log(result);
        output.push(result);
    }
    // console.log(this);
    return output;
}
var htmls = courses.map2(function (course, index) {
    // console.log(index, course);
    return `
        <h2>${course}</h2>`;
});
console.log(htmls.join(""));