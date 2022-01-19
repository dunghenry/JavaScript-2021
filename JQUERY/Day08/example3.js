$(document).ready(function(){
    $("#btn1").click(function(event){
       alert( $(".text1").text());
    })
    $("#btn2").click(function(event){
       alert( $(".text2").html());
    })
})
// ! Tương tự như attr thì val, text, html cũng có hàm gọi lại

$(function(){
    $("#btn1").click(function(){
        $(".text1").text(function(index, value){
            console.log(index);
            return "Đây là text mới: " + value;
        })
    })
})
$(function(){
    $("#btn3").click(function(){
        $("#text3").val(function(index, value){
            console.log(index);
            return "Đây là: " + value;
        })
    })
})

$(function(){
    $("#btn3").click(function(){
        $("#text3").val("Dolly Duck");
    })
})