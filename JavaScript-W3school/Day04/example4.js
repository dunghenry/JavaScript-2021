var cars = [
    {
        type: "Volvo",
        year: 2011,
    },
    {
        type: "Honda",
        year: 2001,
    },
    {
        type: "Saab",
        year: 2020,
    }
]
console.log(cars);

cars.sort(function(a, b){
    return a.year - b.year;
});
console.log(cars);
// Xắp xếp mảng đối tượng tăng dần theo năm
function myFunction(){
    var demo = document.getElementById("demo");
    console.log(demo);
    
    cars.sort(function(a, b){
        return a.year - b.year;
    });
    // console.log(cars);
        demo.innerHTML =
            cars[0].type +" "+ cars[0].year + "<br>" +
            cars[1].type +" "+ cars[1].year +"<br>" +
            cars[2].type +" "+ cars[2].year +"<br>";
}


