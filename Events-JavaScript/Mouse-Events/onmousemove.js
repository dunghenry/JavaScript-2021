document.addEventListener(
  "DOMContentLoaded",
  function () {
    var icon = document.getElementById("icon");
    icon.onmousemove = function () {
      this.style.width = "100px";
      this.style.height = "100px";
    };
    icon.onmouseout = function () {
      this.style.width = "50px";
      this.style.height = "50px";
    };
  },
  false
);
