var qrcode = new QRCode("qrcode");
function makeCode() {
  var elText = document.getElementById("text");
  const text_error = document.getElementById("text-error");
  if (!elText.value) {
    var img = document.getElementsByTagName("img")[0];
    img.style.display = "none";
    text_error.innerHTML = "The search field cannot be empty!";
    elText.focus();
    return;
  } else {
    text_error.innerHTML = "";
  }
  qrcode.makeCode(elText.value);
}
makeCode();
$("#text")
  .on("blur", function () {
    makeCode();
  })
  .on("keydown", function (e) {
    if (e.keyCode == 13) {
      makeCode();
    }
  });
