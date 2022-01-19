$(function(){
    $("#btn1").click(function(){
        $("p").remove(".text");
    })
})
// ! Xóa tất cả các thẻ có class là text
$(function(){
    $("#btn2").click(function(){
        $("p").remove(".demo, .text");
    })
})
// ! Xóa tất cả các thẻ có class là text