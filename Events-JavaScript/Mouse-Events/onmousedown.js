document.addEventListener(
    "DOMContentLoaded",
    function () {
        var btn = document.getElementById("btn");
        btn.onmousedown = function () {
            alert("Bạn vừa click ");
        };
    },
    false
);
// Dùng tất cả các nút trên chuột nhấn vào button đều xuất hiện hộp cảnh báo