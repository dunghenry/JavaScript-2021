document.addEventListener("DOMContentLoaded", function () {
    var inp = document.getElementById("demo");
    inp.onfocus = function () {
        inp.style.background = "red";
    };
});
// Khi có tiêu điểm cụ thể là nhấp chuột vào input thì bg sẽ đổi màu