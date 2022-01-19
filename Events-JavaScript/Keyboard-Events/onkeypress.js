document.addEventListener(
    "DOMContentLoaded",
    function () {
        var inp = document.getElementById("demo");
        inp.onkeypress = function () {
            inp.style.background = "yellow";
        };
    },
    false
);
// Tương tự onkey down