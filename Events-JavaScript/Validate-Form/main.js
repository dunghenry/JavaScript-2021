var sb = document.getElementById("submit");
sb.onclick = function () {
  var dk = /^[a-z]{5,10}$/;
  var text_pass = document.getElementById("error-password");
  var text_error;
  var password = document.getElementById("password").value;
  if (password === "") {
    text_error = "Bạn cần nhập mật khẩu!!!";
  } else if (dk.test(password) === true) {
    text_error = "Yes";
  } else if (dk.test(password) === false) {
    text_error = "No";
  }
  text_pass.innerHTML = text_error;
};
