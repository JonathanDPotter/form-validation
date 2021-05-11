import "./style.scss";

const form = [...document.getElementsByTagName("form")][0];
const submit = document.getElementById("submit");
const inputs = [...document.querySelectorAll("input")];
const passwords = inputs.slice(3, 5);

submit.addEventListener("click", (event) => {
  event.preventDefault();
  let valid = 0;
  inputs.forEach((input) => {
    input.parentElement.classList.remove("invalid");
    if (!input.checkValidity()) {
      input.parentElement.classList.toggle("invalid");
    } else { 
      valid++
    }
  });
  if (valid === 6) {
    form.classList.add("hidden");
    [...document.getElementsByTagName("h1")][0].textContent = "Great Job!";
  } else {
    let invalid = inputs.filter((input) => !input.checkValidity())
    invalid[0].focus();
    invalid[0].reportValidity();
 }
});

inputs.forEach((input) => {
  input.addEventListener("focusout", () => {
    if (input.checkValidity()) {
      input.parentElement.classList.remove("invalid");
    } else {
      input.parentElement.classList.add("invalid");
    }
  });
});

passwords[1].addEventListener("focusout", () => {
  if (passwords[1].value != passwords[0].value) {
    passwords[1].value = "";
    window.alert("Passwords must match!");
  }
});
