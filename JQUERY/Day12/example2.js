$(function(){
    $(".div").children().css("border", "2px solid red");
})
// !Tất cả các em của .div đc set border

$(function(){
    $(".div").children(".p1").css("border", "2px solid red");
})

$(function(){
    $(".div").find("span").css("border", "2px solid red");
})
// !Tất cả các span

$(function(){
    $(".div").find("*").css("border", "2px solid red");
})
// !Tất cả các con của div