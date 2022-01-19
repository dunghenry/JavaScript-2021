document.addEventListener("DOMContentLoaded", function () {
    var inp = document.getElementById("demo");
    inp.onblur = function () {
        inp.value = inp.value.toUpperCase();
    };
});
// Khi nhâp xong trường kí tự nhấp ra khỏi input sẽ tự chuyển thành chữ in hoa