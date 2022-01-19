
$(function () {
    $("#btn1").click(function(){
        $(".p1").before("<b>Appended text</b>.");
    })
    $("#btn2").click(function(){
        $("ol").after("<ol><li>Append list items</li></ol>");
    })
  })

// ! Cũng tương tự như prepend, append vì thế after, before có thể nhận vố số giá trị
