// Toán tử 3 ngôi
var course = {
    name: "Javescript",
    coin: 250,
}

// if(course.coin>0){
//     console.log(`${course.coin} Coins`);
// }
// else{
//     console.log("Free");
// }

var result = course.coin > 0 ? `${course.coin} Coins`:"Miễn phí";
console.log(result);

var a = -1;
var b = 2;

var c = a > 0 ? "a lớn hơn 0" : "a nhỏ hơn 0";
console.log(c);