var attempt = 3;
var username;
var password;
var usernameErrMsg;
var passwordErrMsg;
var warningMessage;
var genError;

function validate() {
  username = document.getElementById("username");
  password = document.getElementById("password");
  usernameErrMsg = document.getElementById("username-error");
  passwordErrMsg = document.getElementById("password-error");
  if (username.value.toLowerCase() == "admin" && password.value == "admin") {
    navigateTo("practice.html");

    return false;
  } else {
    if (username.value === "") {
      usernameErrMsg.innerHTML = "Username cannot be empty.";
    }
    if (password.value === "") {
      passwordErrMsg.innerHTML = "Password cannot be empty.";
    }

    if (username.value !== "" && password.value !== "") {
      genError = document.getElementById("general-error");
      genError.innerHTML = "Login details not found!";
    }
    attempt--; // Decrementing by one.
    warningMessage = document.getElementById("warning-count-message");
    if (attempt > 0) {
      warningMessage.innerHTML =
        "You have " + attempt + " attempt(s) remaining!!! ";
    }
    if (attempt == 0) {
      warningMessage.innerHTML = "Loading.....";

      setTimeout(function () {
        navigateTo("fallout.html");
      }, 3000);
      return false;
    }
  }
}

function usernameClick() {
  clearUsernameErrorMessage();
}

function clearUsernameErrorMessage() {
  usernameErrMsg.innerHTML = "";
  clearGeneralError();
}

function clearPasswordErrorMessag() {
  passwordErrMsg.innerHTML = "";
  clearGeneralError();
}

function navigateTo(url) {
  window.location.href = url;
}

function clearGeneralError() {
  genError.innerHTML = "";
}