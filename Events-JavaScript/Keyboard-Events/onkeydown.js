document.addEventListener(
    "DOMContentLoaded",
    function () {
        var inp = document.getElementById("demo");
        inp.onkeydown = function () {
            inp.style.background = "green";
        };
    },
    false
);
// Khi nhập từ bàn phím bg chuyển màu