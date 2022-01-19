$(function(){
    $("button").click(function(){
        $(".purple").fadeToggle();
        $(".red").fadeToggle("slow");
        $(".green").fadeToggle(2000);
        // $(".blue").fadeOut(5000);
    })
})