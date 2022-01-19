$(function(){
    $("span").parent().css("border", "2px solid red");
})
// ! Set border ngay cha gần nhất
$(function(){
    $("span").parents().css("border", "2px solid red");
})
// ! Set border tất cả cha nó

$(function(){
    $("span").parentsUntil("ul").css("border", "2px solid red");
})
// ! Set border giữa ul và span
