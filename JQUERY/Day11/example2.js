$(function(){
    $("button").click(function(){
        console.log($("p").css("background"));
    })
})

$(function(){
    $("button").click(function(){
        $("p").css("background", "red");
    })
})
// ! Set background cho tất cả các thẻ p

$(function(){
    $("button").click(function(){
        $("p").css({"background": "blue", "font-size": "25px"});
    })
})
// ! Set nhiều thuộc tính