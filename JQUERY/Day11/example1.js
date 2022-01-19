$(function(){
    $("#btn1").click(function(){
        $("h1").addClass("myStyle");
    })
    $("#btn2").click(function(){
        $("h1").removeClass("fontSize");
    })
    $("#btn2").click(function(){
        $("h1").removeClass("myStyle");
    })
    $("#btn3").click(function(){
        $("h1").toggleClass("fontSize");
    })
    $("#btn3").click(function(){
        $("h1").toggleClass("myStyle");
    })

})