// !Vòng lặp lồng nhau
var myArray = [
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
];

for(var i = 0; i < myArray.length; i++){
    for(var j = 0; j < myArray[i].length; j++){
        console.log(myArray[i][j]);
    }
}
// TODO Loop
for(var i = 10; i > 0; i--){
    console.log(i);
}
for(var i = 0; i < 100; i += 5){
    console.log(i);
}