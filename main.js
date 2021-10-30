// Get Element
var el = document.getElementById("email");
// Specify the input type
var eltype = document.querySelector("input").getAttribute("type");
// Email Extension "You can change this"
var Email_extension = "@" + "gmail.com";

if (eltype == "email") {
  el.addEventListener("keydown", function (event) {
    var code = event.keyCode || event.which;
    // Press Tab
    if (!el.value == "") {
      if (code === 9) {
        el.value += Email_extension;
      }
    }
  });
}
