$(function(){
    $("h1").siblings().css("border", "2px solid purple");
    // Tất cả các ace của h1
    $("h1").siblings("span").css("border", "2px solid purple");
    // Tất cả các ace của h1 là span
    $("h1").next().css("border", "2px solid purple");
    // Sau h1
     $("h1").nextAll().css("border", "2px solid purple");
    // Tất cả sau h1
     $("h1").nextUntil("b").css("border", "2px solid purple");
    // Trong khoảng từ h1 đến b
      $("p").prev().css("border", "2px solid purple");
      $("b").prevAll().css("border", "2px solid purple");
      $("b").prevUntil("p").css("border", "2px solid purple");
})