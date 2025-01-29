document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.style.maxWidth = "500px";
  form.style.margin = "50px auto";
  form.style.padding = "30px";
  form.style.border = "2px solid #6c63ff";
  form.style.borderRadius = "20px";
  form.style.boxShadow = "0 8px 15px rgba(108, 99, 255, 0.3)";
  form.style.fontFamily = "'Poppins', sans-serif";

  const labels = document.querySelectorAll("label");
  labels.forEach((label) => {
    label.style.display = "block";
    label.style.marginBottom = "10px";
    label.style.fontWeight = "500";
    label.style.color = "#6c63ff";
    label.style.fontSize = "14px";
  });

  const inputs = document.querySelectorAll("input, textarea, select");
  inputs.forEach((input) => {
    input.style.width = "100%";
    input.style.padding = "12px 15px";
    input.style.marginBottom = "20px";
    input.style.border = "1px solid #ddd";
    input.style.borderRadius = "10px";
    input.style.boxSizing = "border-box";
    input.style.fontSize = "15px";
    input.style.transition = "all 0.3s ease";
    input.style.backgroundColor = "#fff";
    input.style.color = "#333";

    input.addEventListener("focus", () => {
      input.style.borderColor = "#6c63ff";
      input.style.boxShadow = "0 0 8px rgba(108, 99, 255, 0.3)";
    });

    input.addEventListener("blur", () => {
      input.style.borderColor = "#ddd";
      input.style.boxShadow = "none";
    });
  });

  const submitButton = document.querySelector("input[type='submit']");
  submitButton.style.backgroundColor = "#6c63ff";
  submitButton.style.color = "#fff";
  submitButton.style.border = "none";
  submitButton.style.padding = "12px 20px";
  submitButton.style.fontSize = "16px";
  submitButton.style.borderRadius = "25px";
  submitButton.style.cursor = "pointer";
  submitButton.style.transition = "all 0.3s ease";

  submitButton.addEventListener("mouseover", () => {
    submitButton.style.backgroundColor = "#4b4ace";
    submitButton.style.boxShadow = "0 8px 15px rgba(75, 74, 206, 0.4)";
  });

  submitButton.addEventListener("mouseout", () => {
    submitButton.style.backgroundColor = "#6c63ff";
    submitButton.style.boxShadow = "none";
  });

  const formTitle = document.createElement("h2");
  formTitle.textContent = "Get in Touch";
  formTitle.style.textAlign = "center";
  formTitle.style.marginBottom = "30px";
  formTitle.style.fontSize = "24px";
  formTitle.style.color = "#6c63ff";
  form.insertBefore(formTitle, form.firstChild);

  const divider = document.createElement("hr");
  divider.style.border = "none";
  divider.style.height = "2px";
  divider.style.background =
    "linear-gradient(90deg, transparent, #6c63ff, transparent)";
  divider.style.marginBottom = "30px";
  form.insertBefore(divider, form.children[1]);

  const radioLabels = document.querySelectorAll("input[type='radio'] + label");
  radioLabels.forEach((label) => {
    label.style.marginLeft = "8px";
    label.style.fontSize = "14px";
    label.style.color = "#555";
  });

  const radioGroups = document.querySelectorAll("input[type='radio']");
  radioGroups.forEach((radio) => {
    radio.style.marginRight = "10px";
  });
});
