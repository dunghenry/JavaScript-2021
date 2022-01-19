$(function(){
    $("button").on({
        click : function(){
            $("a").attr({
                "href": "https://www.facebook.com/stories/create",
                "title": "Xin chào",
            });
        }
    })
})

$(function(){
    $("button").on({
        click : function(){
            $("a").attr("href", "https://www.facebook.com/stories/create");
        }
    })
})

$(function(){
    $("button").click(function(){
        $("a").attr("href", function(index, value){
            console.log(index);
            return value + "/stories/create";
        })
    })
})
// Thường thì là index sẽ là 0