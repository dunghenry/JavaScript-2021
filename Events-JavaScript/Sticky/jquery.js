$(function(){
    $(window).scroll(function () {
    let oTop = $("#content").offset().top - 120;
    if ($(window).scrollTop() > oTop) {
        $("#menu").addClass("sticky");
    } else {
        $("#menu").removeClass("sticky");
    }
    });
})
