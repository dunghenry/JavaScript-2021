$(function(){
    $('.showText').click(function(){
       alert("Text: " +$("p").text());
    })
    $('.showHtml').click(function(){
       alert("Html: " +$("p").html());
    })
})