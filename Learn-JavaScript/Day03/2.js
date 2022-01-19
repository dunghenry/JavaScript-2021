// !Hiểu hơn về câu lệnh điều kiện và phép so sánh
var a = 1;
var b = 2;

var result = a < b;
console.log(result);

if(a < b){
    console.log("a < b");
}
else{
        console.log("a > b");
}

if(result){
    console.log("a < b");
}
else{
        console.log("a > b");
}

var result1 = "A" && "B" && "C" && "D";

console.log(result1);
if(result1){
    console.log("Đúng");
}
else{
        console.log("Sai");
}

var result2 = "A" && NaN && "C" && "D";
console.log(result2);

// !Lấy giá trị false đầu tiên;
if(result2){
    console.log("Đúng");
}
else{
        console.log("Sai");
}

// !Toán tử or;
  
var result3 = "A" || "B" || "C" || "D";
console.log("Result: ", result3);

var result4 = null || "B" || "C" || "D";
console.log("Result: ", result4);

//TODO Lấy giá trị đầu tiên khác giá trị false;

if(result4){
    console.log("Đúng");
}
else{
        console.log("Sai");
}
// !Nếu muốn trả về false thì phải thay đổi giá trị cuả B, C , D là false
