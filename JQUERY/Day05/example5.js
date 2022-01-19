$(function(){
    $("button").click(function(event){
        var purple = $(".purple");
        purple.animate({
            left: "200px",
        }, "slow")
        purple.animate({
            fontSize: "30px"
        }, "slow")
    })
})