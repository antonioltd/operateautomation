"user strict";

let initialSecretNum;

const submitBtn = document.querySelector("#submit");
const againBtn = document.querySelector("#again-btn");
const secretNumberBox = document.querySelector("#secret-number");
const input = document.querySelector("#input");
const warningMessageEl = document.querySelector(".warning-message");
const scoreEl = document.querySelector("#score");
const initialPoints = 20;

const onBodyLoad = () => {
  initialSecretNum = Math.trunc(Math.random() * 20 + 1);
  input.value = 0;
};
againBtn.addEventListener("click", () => {
  initialSecretNum = Math.floor(Math.random() * 20 + 1);
  input.value = 0;
  submitBtn.disabled = false;
  input.disabled = false;
  warningMessageEl.style.display = "none";
  scoreEl.textContent = initialPoints;
  secretNumberBox.textContent = "❓";
});
submitBtn.addEventListener("click", () => {
  if (scoreEl.textContent == 0) {
    warningMessageEl.textContent = "You ran out of points.";
    return;
  }
  if (initialSecretNum === Number(input.value)) {
    document.querySelector("div").style.backgroundColor = "aqua";
    submitBtn.disabled = true;
    input.disabled = true;
    warningMessageEl.style.display = "block";
    warningMessageEl.style.color = "Blue";

    secretNumberBox.textContent = "✔";
    secretNumberBox.style.color = "green";

    warningMessageEl.textContent = "Correct";
  } else {
    if (initialSecretNum > Number(input.value)) {
      warningMessageEl.classList.remove("hidden");
      warningMessageEl.style.display = "block";
      warningMessageEl.textContent = "Too low";
      warningMessageEl.style.color = "red";

      scoreEl.textContent = Number(scoreEl.textContent) - 1;
    } else {
      warningMessageEl.style.color = "red";
      warningMessageEl.textContent = "Too high";
      warningMessageEl.style.display = "block";
      scoreEl.textContent = Number(scoreEl.textContent) - 1;
    }
  }
});
