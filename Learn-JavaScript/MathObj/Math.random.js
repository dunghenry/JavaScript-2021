const a = Math.random();
console.log(a)

const random = Math.floor(Math.random() * 100);
console.log(random); // 0 - 99

const random1 = Math.floor(Math.random() * 5);
var bonus = [
    '10 coin',
    '20 coin',
    '30 coin',
    '40 coin',
    '50 coin',
]
console.log(bonus[random1])

// ví dụ game đồ trong game 
if(random < 90){
    console.log("Quay trúng đồ kaka!!!!")
}