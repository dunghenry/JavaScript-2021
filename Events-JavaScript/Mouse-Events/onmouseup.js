document.addEventListener(
    "DOMContentLoaded",
    function () {
        var btn = document.getElementById("btn");
        btn.onmouseup = function () {
            alert("Bạn vừa click ");
        };
    },
    false
);
