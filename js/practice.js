$(document).ready(function () {
  $('button:contains("Alert")').on("click", function () {
    clearMessages();
    alert("Alert");
    $(".jsAlertMsg").text("Dismissed!");
  });
  $('button:contains("Confirm")').on("click", function () {
    clearMessages();
    var txt;
    if (confirm("Press a button!")) {
      txt = "You pressed OK!";
    } else {
      txt = "You pressed Cancel!";
    }

    $(".jsConfirmtMsg").text(txt);
  });
  $('button:contains("Prompt")').on("click", function () {
    clearMessages();
    var person = prompt("Please enter your name", "Jose Rizal");

    if (person == null || person == "") {
      txt = "User cancelled the prompt.";
    } else {
      txt = "Pareng " + person.toUpperCase() + "! Kamusta?";
    }
    $(".jsPromptMsg").text(txt);
  });
});

function clearMessages() {
  $(".jsAlertMsg").text("");
  $(".jsConfirmtMsg").text("");
  $(".jsPromptMsg").text("");
  //   setTimeout(function () {
  //     $(".alertMsg").text("");
  //   }, 3000);
}
