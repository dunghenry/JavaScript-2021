document.addEventListener("DOMContentLoaded", function () {
    var inp = document.getElementById("demo");
    inp.onchange = function () {
        inp.value = inp.value.toUpperCase();
    };
});
//  <!-- Khi nhập xong ấn enter thì chữ đổi thành chữ in hoa -->