$(function(){
    $("button").click(function(){
        $.get("demo.txt", function(data, status){
            alert("Data: " + data + "\nStatus: " + status);
        })
    })
})
// Lấy ra dữ liệu từ tệp demo.txt