var cars = [
    {
        type: "Honda",
        year : 1998,
    },
    {
        type: "Saab",
        year: 2001,
    },
    {
        type: "Yamaha",
        year: 2010,
    }
]

function myFunction(){
    var demo = document.getElementById("demo");
    console.log("Click");

    cars.sort(function(a, b){
        var x = a.type.toLocaleLowerCase() ;
        var y = b.type.toLocaleLowerCase();
        if(x<y){
            return -1;
        }
        if(x > y){
            return 1;
        }
        return 0;
    })
    demo.innerHTML = 
    cars[0].type + " " + cars[0].year + "<br>"+
    cars[1].type + " " + cars[1].year + "<br>"+
    cars[2].type + " " + cars[2].year

}

// ! Xếp giảm thì thay đổi return 

var numbers = [5, 10, 1, 8, 20];
for(var i = 0; i < numbers.length; i++){
    for(var j = i+1; j < numbers.length - 1; j++){
        if(numbers[i] > numbers[j]){
            var tmp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = tmp;
        }
    }
}
console.log(numbers);
