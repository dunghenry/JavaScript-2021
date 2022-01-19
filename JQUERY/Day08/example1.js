$(function(){
    $("button").on({
        click : function(){
            alert($("a").attr("href"));
        }
    })
})
