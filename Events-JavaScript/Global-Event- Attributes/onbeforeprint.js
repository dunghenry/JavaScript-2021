document.addEventListener(
    "DOMContentLoaded",
    function () {
        var event = document.getElementById("event");
        console.log(event);
        event.onbeforeprint = function () {
            alert("Success");
        };
    },
    false
);
// !Nếu như chúng ta nhấn in thì sẽ thông báo ra màn hình là Success