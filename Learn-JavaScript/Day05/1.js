// Hàm
function showDialog() {
    alert("Hello world");
}
showDialog();

function writeLog() {
    console.log("Đây là một dòng log");
}
writeLog();

function writeLog1(message) {
    console.log(message);
}
writeLog1("Hello world");
// !message là tham số.Gọi hàm và truyền tham số
// TODO có thể sử dụng nhiều kiểu dữ liệu

function writeLog2(message1, message2) {
    if(message1){
        console.log(message1);
    }
    if(message2){
        console.log(message2);
    }
}
writeLog2("message1", "message2");

function writeLog3(){
    console.log(arguments);
}
writeLog3("Log1", "Log2", "Log3");

function writeLog4(){
    for(var param of arguments){
    console.log(param);
    }
}
writeLog4("Log1", "Log2", "Log3");


function writeLog5(){
    var myString = "";
    for(var param of arguments){
        myString += `${param}-`
    } 
    console.log(myString);
}
writeLog5("Log1", "Log2", "Log3");




