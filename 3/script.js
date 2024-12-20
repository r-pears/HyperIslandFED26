const borderThickness = "1px";
const borderRadiusForm = "1rem";
const colorText = "black";
const colorBackground = "white";
const colorBorder = "grey";
const colorBorderForm = "black";
const fontFamily = "sans-serif";
const padding = "1rem";

const body = document.querySelector("body");
const form = document.querySelector("form");
const labels = document.querySelectorAll('label:not([for="options"])');
const requiredLabels = document.querySelectorAll(
  "label:has(~ input:is(:required))"
);
const inlineInputs = document.querySelectorAll(
  'input[type="text"], input[type="email"], input[type="tel"]'
);
const inputsWithBorders = document.querySelectorAll("input, textarea");
const textareas = document.querySelectorAll("textarea");
const submitButton = document.querySelector('input[type="submit"]');

body.style.display = "flex";
body.style.alignItems = "center";
body.style.justifyContent = "center";
body.style.fontFamily = `${fontFamily}`;
body.style.minHeight = "100svh";
body.style.margin = 0;

form.style.border = `${borderThickness} solid ${colorBorderForm}`;
form.style.borderRadius = `${borderRadiusForm}`;
form.style.padding = `${padding}`;

labels.forEach((label) => {});

requiredLabels.forEach((label) => {
  const labelArray = label.textContent.split(":");
  label.textContent = labelArray.join("*");
});

inlineInputs.forEach((input) => {
  input.style.display = "block";
  input.style.width = `calc(100% - ${padding} / 2)`;
});

inputsWithBorders.forEach((input) => {
  input.style.border = `${borderThickness} solid ${colorBorder}`;
  input.style.borderRadius = `calc(${borderRadiusForm} / 4)`;
  input.style.marginBlock = "0.125rem 0";
  input.style.padding = "0.5ch";
});

textareas.forEach((textarea) => {
  textarea.style.resize = "none";
});

submitButton.style.cursor = "pointer";
submitButton.style.marginBlock = "0";
submitButton.style.width = "100%";
