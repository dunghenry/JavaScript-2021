$(document).ready(function(){
    $('p').click(function(event){
        $(this).hide();
    })
})

$(function(){
    $('p').click(function(){
        $(this).css({"font-size": "15px", "color": "red"});
    })
})