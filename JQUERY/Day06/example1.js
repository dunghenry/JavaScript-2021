$(function(){
    $(".slideDown").click(function(event){
        $(".container .purple").slideDown(2000);
    })
    $(".stop").click(function(event){
        $(".container .purple").stop();
    })
})