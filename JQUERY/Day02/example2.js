// $(function(){
//     $("p").click(function (e) { 
//         $(this).hide();
        
//     });
// })
// ! Click 1 lần

// $(function(){
//     $("p").dblclick(function (e) { 
//         $(this).hide();
        
//     });
// })
// ! Click hai lần

// $(function(){
//     $("p").mouseenter(function (e) { 
//         $(this).hide();
//     });
        
// })
// ! Trỏ con trỏ chuột vào làm hidden 

// $(function(){
//     $("p").mouseleave(function (e) { 
//         $(this).hide();
//     });
// })
// ! Khi con trỏ chuột di chuyển ra ngoài làm hidden

// $(function(){
//     $("p").mousedown(function (e) { 
//         $(this).hide();
//     });
// })
// ! Dùng chuột phải, trái , trên đều .làm hidden

// $(function(){
//     $("p").mouseup(function (e) { 
//         $(this).hide();
//     });
// })
// ! Khi nhấn rồi thả chuột làm hidden

// $(function(){
//     $("p").hover(function (e) { 
//         $(this).hide();
//     });
// })

$(function(){
   $("p").mouseleave(function () { 
        $(this).hide();
    });
})
// ! Khi ko trỏ chuột vào nữa làm hidden
