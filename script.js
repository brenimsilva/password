"use strict";

const btnGenerator = document.getElementById("btn");
const copyBtn = document.querySelector(".copy");
const alertBox = document.getElementById("alertBox");
function getPassword() {
  const chars =
    "0123456789abcdefghijklmnopqrstuvxywzABCDEFGHIJKLMNOPQRSTUVXYWZ!@#$%^&*()_+?><:{}[]";
  const passwordLength = 16;
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  document.getElementById("password").value = password;
}

//  COPY PASSWORD
function copyPassword() {
  const copyPassText = document.getElementById("password");
  copyPassText.select();
  copyPassText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyPassText.value);
  alertBox.classList.remove("hiden");
  alertBox.classList.add("show");
  alertBox.classList.remove("leave");
  setTimeout(() => {
    alertBox.classList.remove("show");
    alertBox.classList.add("leave");
  }, 2000);

  console.log(alertBox);
}

// EVENT LISTENERS
btnGenerator.addEventListener("click", getPassword);
copyBtn.addEventListener("click", copyPassword);
