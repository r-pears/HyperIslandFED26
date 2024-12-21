document.addEventListener("DOMContentLoaded", function () {
  const userName = document.getElementById("username");
  userName.textContent = "Name:";
  document.getElementById("email-label").textContent = "Email:";
  document.getElementById("phone-label").textContent = "Phone Number:";
  document.getElementById("message-label").textContent = "Message:";
  document.getElementById("options-label").textContent = "Choose your option:";

  const form = document.getElementById("contact-form");
  form.style.margin = "80px auto";
  form.style.padding = "60px ";
  form.style.width = "500px";
  form.style.height = "80vh";
  form.style.borderRadius = "10px";
  form.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.2)";
  form.style.backgroundColor = "#E2F4FD";
  form.style.fontSize = "25px";
  form.addEventListener("submit", function (event) {
    event.preventDefault();
  });

  const optionsBtn = document.getElementById("options");
  optionsBtn.style.width = "100px";
  optionsBtn.style.margin = "20px";
  optionsBtn.style.height = "30px";

  const inputBoxes = document.querySelectorAll("input");
  inputBoxes.forEach(function (input) {
    input.style.border = "2px solid #F0F0F0";
    input.style.padding = "10px";
    input.style.borderRadius = "5px";
    input.style.fontSize = "16px";
    input.style.width = "100%";
    input.style.boxSizing = "border-box";
  });

  const messageBox = document.getElementsByTagName("textarea");
  messageBox[0].style.border = "2px solid #F0F0F0";
  messageBox[0].style.width = "100%";

  const selectBox = document.getElementById("options");
  selectBox.style.padding = "10px";
  selectBox.style.borderRadius = "5px";
  selectBox.style.fontSize = "16px";
  selectBox.style.height = "40px";
  selectBox.style.border = "2px solid #F0F0F0";

  //   const radioRows = document.querySelectorAll("radio-row");
  //   radioRows.forEach(function (row) {
  //     row.style.display = "flex";
  //     row.style.alignItems = "center";
  //   });

  const radioInputs = document.querySelectorAll(".radio-input");
  radioInputs.forEach(function (radioInput) {
    radioInput.style.width = "20px";
    radioInput.style.cursor = "pointer";
  });

  const submitBtn = document.getElementById("submit-btn");
  submitBtn.addEventListener("click", function () {
    alert("Form submitted!");
  });
  submitBtn.style.borderRadius = "25px ";
  submitBtn.style.cursor = "pointer";
  submitBtn.style.border = " 0.1px solid #333";
  submitBtn.style.fontSize = "20px";
  submitBtn.style.marginTop = "50px";
  submitBtn.style.padding = "10px 20px";
  submitBtn.style.backgroundColor = "#DADCE0";
});
