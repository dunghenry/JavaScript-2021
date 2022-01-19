document.addEventListener(
    "DOMContentLoaded",
    function () {
        var test = document.getElementById("test");
        test.onscroll = function () {
            alert("Hello");
        };
    },
    false
);