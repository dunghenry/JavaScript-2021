$(function(){
    $("button").click(function(event){
        $(".purple").animate({
            left : "500px",
            opacity: "0.5",
            height: "200px",
            width: "200px"
        })
    })
})

$(function(){
    $("button").click(function(event){
        $(".purple").animate({
            left : "500px",
            opacity: "0.5",
            height: "+=100px",
            width: "+=100px"
        })
    })
})