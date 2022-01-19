$(function(){
   $('.btn').click(function (e) { 
      $('.text').hide(3000, function(){
         $('.btn').click(function(){
            $('.text').show(3000);
         })
      })
   });
})

$(document).ready(function(){
    $('.btn').on({
        click: function(){
            $(this).hide(2000);
        },
        mouseleave: function(){
            $(this).css("background-color", "lightgray");
        },
    })
})