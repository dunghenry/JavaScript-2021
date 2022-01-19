document.addEventListener(
    "DOMContentLoaded",
    function () {
        var event = document.getElementById("event");
        console.log(event);
        event.onafterprint = function () {
            alert("Success");
        };
    },
    false
);
// ?Thông báo trước khi in