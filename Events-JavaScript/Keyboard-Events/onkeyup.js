document.addEventListener(
    "DOMContentLoaded",
    function () {
        var inp = document.getElementById("demo");
        inp.onkeyup = function () {
            inp.style.background = "red";
        };
    },
    false
);

//Nhap chu khi nhả bàn phím ra đồi bg