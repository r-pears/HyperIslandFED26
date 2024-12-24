const form = document.querySelector("form");

if (form) {
  form.style.display = "flex";
  form.style.flexDirection = "row";
  form.style.flexWrap = "wrap";
  form.style.justifyContent = "space-between";
  form.style.alignItems = "center";
  form.style.backgroundColor = "#e2e8f0";
  form.style.color = "black";
  form.style.fontFamily = "Verdana";
  form.style.fontSize = "18px";
  form.style.width = "50%";
  form.style.maxWidth = "700px";
  form.style.maxHeight = "900px";
  form.style.margin = "0 auto";
  form.style.padding = "50px";
  form.style.borderRadius = "8px";
  form.style.boxShadow = "0 8px 15px rgba(0, 0, 0, 0.3)";
  form.style.marginTop = "50px";
}

const message = document.getElementById("message");
if (message) {
  message.style.width = "200px";
  message.style.padding = "10px";
  message.style.marginTop = "10px";
  message.style.marginLeft = "60px";
}

const button = document.querySelector("input[type=submit]");

if (button) {
  button.style.backgroundColor = "#60a5fa";
  button.style.color = "Black";
  button.style.marginTop = "40px";
  button.style.borderRadius = "10px";
  button.style.padding = "10px";
  button.style.width = "200px";
  button.style.fontSize = "18px";
}
