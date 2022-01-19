document.addEventListener(
    "DOMContentLoaded",
    function () {
        var text = document.getElementById("text");
        text.onwheel = function () {
            this.style.fontSize = "30px";
        };
    },
    false
);