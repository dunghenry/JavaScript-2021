$(function(){
    $('button').click(function(event){
        var purple = $(".purple")
        purple.animate({
            height: "300px",
            opacity: "0.4"
        }, "slow");
        purple.animate({
            width: "300px",
            opacity: "0.8"
        }, "slow");
        purple.animate({
            height: "150px",
            opacity: "0.4"
        }, "slow");
        purple.animate({
            width: "150px",
            opacity: "0.8"
        }, "slow");
    })
})