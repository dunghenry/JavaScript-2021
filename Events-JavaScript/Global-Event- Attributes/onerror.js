document.addEventListener(
    "DOMContentLoaded",
    function () {
        var img = document.getElementById("image");
        img.onerror = function () {
            alert("Error");
        };
    },
    false
);
// link ảnh sai sẽ có hộp cảnh báo