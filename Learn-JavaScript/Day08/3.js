// ! Array method

var myCourses = [
    {
        id: 1,
        name: "JS",
        coin: 0,
    },
    {
        id: 2,
        name: "JS",
        coin: 100,
    },
    {
        id: 3,
        name: "HTML/CSS",
        coin: 0,
    }
]
myCourses.forEach(function(myCourse, index){
    console.log(index, myCourse);
})

myCourses.forEach(function(MyCourse){
    console.log(MyCourse);
})

var isFree = myCourses.every(function(myCourse, index){
    console.log(index);
    return myCourse.coin === 0;
})
console.log(isFree);
// !Một điều kiện sai trả về false và trả về true thì giá phải bằng 0 hết và trả về vị trí đúng

var isFree = myCourses.some(function(myCourse, index){
    console.log(index);
    return myCourse.coin === 0;
});
console.log(isFree);
// Chỉ cần 1 điều kiện đúng là trả về true

var myCourse = myCourses.find(function(myCourse, index){
    return myCourse.name === "JS";
})
console.log(myCourse);
// Nếu không tìm kiếm đc thì trả về undefind và chỉ trả về 1 đối tượng

var myCourse = myCourses.filter(function(myCourse, index){
    return myCourse.name === "JS";
})
console.log(myCourse);
// Lấy ra tất cả các đối tượng


var coursesHandler = function(myCourse, index, originArray){
    // console.log(myCourse); 
    // return myCourse.name;
    return{
        id : myCourse.id,
        name: `Khóa học: ${myCourse.coin}`,
        coin: myCourse.coin,
        coinText: `Giá: ${myCourse.coin}`,
        index: index,
        // originArray: originArray,
        originArray: myCourse,
    };
}
var newCourses = myCourses.map(coursesHandler);
console.log(newCourses);

var totalCoin = 0;
for(var myCourse of myCourses){
    totalCoin += myCourse.coin;
}
console.log(totalCoin);

var i = 0;
function coinHandler(accumulator, currentValue, currentIndex, originArray){
    i++;
    var total = accumulator + currentValue.coin;
    console.table({
        "Lượt chạy: ": i,
        "Biến tích trữ: ": accumulator,
        "Giá khóa học: ": currentValue.coin,
        "Tích trữ được: ": total

    });
    return total;
}
var totalCoin = myCourses.reduce(coinHandler, 0);
console.log(totalCoin);

var totalCoin = myCourses.reduce(function(accumulator, currentValue){
    return accumulator + currentValue.coin;
}, 0)
console.log(totalCoin);