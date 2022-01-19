function tbc(x, y){
    var z = (x+y)/2;
    return z;//dừng lại cho dù có các hàm ở đằng sau
}
console.log(tbc(5,6));
//kết quả như là 1 số thực có thể mag đi so sánh, tính toán

if(tbc(5,6)>5){
    console.log("Giá trị tbc lớn hơn 5");
}
// Hàm anonymous(hàm không có tên)
var z = function(x, y){
    return (x + y) /2;
}
console.log(z(2,4));

//Hàm clousure

function chao(){
    var ten = "Dũng";
    return function(){
        console.log("Hello " + ten);
    }
}
var h = chao();//h trở thành hàm anonymous
h();

//Hàm return có thể sử dụng tất cả các biến trong hàm chào
function chao1(){
    var ten = "Dũng";
    function thongbao()
    //var thongbao = function()
    {
        console.log("Hello " + ten);
    }
    ten = ten  + " đẹp trai";
    return thongbao();
}
chao1();
