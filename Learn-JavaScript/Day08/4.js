var courses = [
    {
        id: 1,
        name: "JS",
        coin: 200,
    },
    {
        id: 2,
        name: "C",
        coin: 100,
    },
    {
        id: 3,
        name: "C++",
        coin: 150,
    },
    {
        id: 4,
        name: "PHP",
        coin: 300,
    },
]
var totalCoin = courses.reduce(function(total, course){
    return total + course.coin;
},0)
console.log(totalCoin);


var numbers = [200, 100, 150, 300];

var totalCoin1 = numbers.reduce(function(total, number){
    return total + number;
})
console.log(totalCoin1);

// !Làm phẳng mảng 
var depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
var flatArray = depthArray.reduce(function(flatOutput, depthItem){
    return flatOutput.concat(depthItem);
}, [])
console.log(flatArray);

// TODO lấy ra khóa học đưa vào mảng mới

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

var newCoures = topics.reduce(function(courses, topic){
    return courses.concat(topic.courses);
}, [])
console.log(newCoures);

var htmls = newCoures.map(function(course){
    // Dùng map để duyệt qua mảng
    return`
    <div>
        <h2>${course.title}</h2>
        <p>ID:${course.id}</p>
    </div>`
    ;
});
console.log(htmls);
console.log(htmls.join(""));