Array.prototype.map2 = function(callback){
    var output = []
    for (var i = 0; i < this.length; i++){
       var result = callback(this[i])
       output.push(result)
    }
    return output;
}
 
var courses = [
    'JS',
    'C++',
    'PHP'
]
var htmls = courses.map2(function(course){
    return `<h2>${course}</h2>`
});

console.log(htmls)