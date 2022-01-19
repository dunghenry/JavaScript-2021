$(function(){
    $("input").focus(function(event){
        $(this).css({"background": "yellow"})
    });
    // ! focus là khi có tiêu điểm
    $("input").blur(function(event){
        $(this).css({"background": "red"})
    })
    // ! blur là khi mất tiêu điểm
})

$(function(){
    $("input").on("click", function(){
        $(this).hide();
    })
})

$(function(){
    $("input").on({
        click : function(){
            $(this).css({"background": "green"});
        },
        focus : function(){
            $(this).css({"background": "yellow"})
        }
    })
})