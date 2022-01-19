// !Khi function đặt tên trùng nhau nó chỉ lấy ra function sau cùng
function showMessage(){
    var fullName = "Trần Văn Dũng";
    console.log(fullName);
}
function showMessage(){
    var fullName = "Hello world";
    // Biến chỉ đc dùng trong hàm có
    console.log(fullName);
}
showMessage();

// Hàm trong hàm

function show(){
    function showSmall(){
        var myString = "Trần Văn Dũng";
        console.log(myString);
    }
    showSmall();
    // Phải gọi hàm showSmall bên trong hàm show
}
show();
