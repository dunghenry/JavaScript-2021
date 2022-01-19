$(function(){
    $("div").first().css("color", "red");
    $("div").last().css("color", "blue");
    $("div").eq(1).css("color", "green");
    $("p").filter(".p1").css("color", "purple");
    $("p").not(".p1").css("color", "yellow");
    
})