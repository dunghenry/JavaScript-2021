var arr = [1, 2, 3]
const a = arr.reduce(function(sum, num){
    return sum + num;
})
//Không cần giá trị khởi tạo
console.log(a) // 6

var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9], 10]
var flatArray = depthArray.reduce(function (flatOutput, depthItem ){
    return flatOutput.concat(depthItem);
    //Nối từng phần tử của mảng cũ vào mảng trống

    //! console.log(depthItem) // 1 2 [3, 4] 5, 6, [7, 8, 9] 10
    
}, [])
//!Khởi tạo mảng rỗng để lưu giá trị

console.log(flatArray)

//Arr obj

var topics = [
    {
        topic: "Font-end",
        courses: [
            {
                id: 1,
                title: "HTML/CSS",
            },
            {
                id: 2,
                title: "Javascript",
            }
        ]

    },
    {
        topic: "Back-end",
        courses: [
            {
                id: 1,
                title: "PHP",
            },
            {
                id: 2,
                title: "NodeJS",
            }
        ]
    }
];

var newCourse = topics.reduce(function(courese, topic){
    return courese.concat(topic.courses)
}, [])
console.log(newCourse);

var display = newCourse.map(function(course){
    return course.title + " " + course.id
})
console.log(display);

display.forEach(element => {
    console.log(element)
});