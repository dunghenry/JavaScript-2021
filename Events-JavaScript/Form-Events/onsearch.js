document.addEventListener("DOMContentLoaded", function () {
    var inp = document.getElementById("demo");
    var text = document.getElementById("text");
    inp.onsearch = function () {
        text.innerHTML = inp.value;
    };
});
// Khi điền vào input nhấn enter sẽ gắn value vừa nhập vào một dòng