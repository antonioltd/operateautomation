var attempt = 3;
function validate() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if (username == "admin" && password == "admin") {
    alert("Login successfully");
    window.location.href = "practice.html";
    return false;
  } else {
    attempt--; // Decrementing by one.
    alert("You have left " + attempt + " attempt;");
    // Disabling fields after 3 attempts.
    if (attempt == 0) {
        window.location.href = "fallout.html";
      document.getElementById("username").disabled = true;
      document.getElementById("password").disabled = true;
      document.getElementById("login").disabled = true;
      return false;
    }
  }
}

function buttonClick() {
  alert("try");
}
