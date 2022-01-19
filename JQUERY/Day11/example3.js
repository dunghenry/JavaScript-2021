$(function(){
    $("button").click(function(){
        console.log($("p").width());
    })
    $("button").click(function(){
        console.log($("p").height());
    })
    
    $("button").click(function(){
        console.log($("p").innerHeight());
    })
    $("button").click(function(){
        console.log($("p").innerWidth());
    })

    $("button").click(function(){
        console.log($("p").outerHeight());
    })
    $("button").click(function(){
        console.log($("p").outerWidth());
    })
})
// ! innerWidth và innerHeight bao gồm cả padding
// ! outerWidth và OuterHeight bao gồm thêm padding và border
