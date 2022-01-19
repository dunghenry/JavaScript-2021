document.addEventListener(
    "DOMContentLoaded",
    function () {
        var event = document.getElementById("event");
        console.log(event);
        event.onbeforeunload = function () {
            return "No";
        };
    },
    false
);
// Hiển thị thanh thông báo khi chúng ta đi đến trang khác cũng như thoát khỏi trang hiện tại