$(function(){
    $("input").on("keyup", function(){
        var value = $(this).val().toLowerCase();
        $("ul li").filter(function(){
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        })
    })
})