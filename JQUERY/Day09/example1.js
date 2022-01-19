$(function () {
    $("#btn1").click(function(){
        $(".p1").append(" <b>Appended text</b>.");
    })
    $("#btn2").click(function(){
        $("ol").append("<li>Append list items</li>");
    })
  })
// ! Thêm nội dung vào cuối thẻ html đã chọn
$(function () {
    $("#btn1").click(function(){
        $(".p1").prepend(" <b>Appended text</b>.");
    })
    $("#btn2").click(function(){
        $("ol").prepend("<li>Append list items</li>");
    })
  })
// ! Thêm nội dung vào trước thẻ html đã chọn
// TODO append, prepend có thể nhận vô số các phần tử mới

