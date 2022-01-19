// Sửa code tại vị trí dấu [3 chấm]

function run(a, h) {
    var s = (1 / 2) * (a * h);

    return s;
}

// Sửa code tại vị trí dấu 3 chấm

function run(sum, different) {
    var a = (sum + different) / 2;
    var b = (sum - different) / 2;
    return 'a is ' + a + ' and b is ' + b;
}

function run(minutes) {
    var seconds = minutes * 60;

    return seconds;
}

// Làm bài tập tại đây

function run(a, b, h) {
    s = ((a + b) / 2) * h;

    return s;
}

var a = 69
var b = --a

console.log(a, b) // ???

var number = 10

var a = ++number * 3 - number-- * 2
var b = number++ * 2 - --number * 3

console.log(a + b) // ???
// ! 11*3-11*2 + 10*2-10*3