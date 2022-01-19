document.addEventListener(
    "DOMContentLoaded",
    function () {
        var btn = document.getElementById("btn");
        btn.ondblclick = function () {
            alert("Bạn vừa click ");
        };
    },
    false
);