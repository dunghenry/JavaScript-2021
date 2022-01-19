// $(document).ready(function(){
//     console.log("Hello world");
//     alert("Hello world");
// })
// alert("Hello world");

// document.addEventListener("DOMContentLoaded", function(){
//     alert("Hello");
// })
$(document).ready(function(){
    $('body').click(function(event){
        // alert("Code đã chạy");
      $('h1').animate({
        marginLeft: 500,
        opacity: 0,
      })
    });
});