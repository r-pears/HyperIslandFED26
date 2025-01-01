const primaryBackgroundColor = "#212830";
const primaryTextColor = "#F0F6FC";
const secondaryBackgroundColor = "#192639";

const body = document.querySelector("body");
const form = document.querySelector("form");
const textarea = document.querySelector("textarea");
const input = document.querySelectorAll("input");

const labelName = document.querySelector("label[for='name']");
const labelEmail = document.querySelector("label[for='email']");
const labelPhone = document.querySelector("label[for='phone']");
const labelMessage = document.querySelector("label[for='message']");
const labelOptions = document.querySelector("label[for='options']");

const select = document.getElementById("options");
const selectOptions = document.querySelectorAll("option");


function bodyFunction(body) {
    body.style.display = "flex";
    body.style.justifyContent = "center";
    body.style.alignItems = "center";
    body.style.backgroundColor = primaryBackgroundColor;
    body.style.color = primaryTextColor;
    body.style.paddingTop = "1rem"
    body.style.fontFamily = "Helvetica, sans-serif"
} 

function labelChange() {
    labelName.innerText = "Full Name";
    labelEmail.innerText = "Email Address";
    labelPhone.innerText = "Phone Number";
    labelMessage.innerText = "Message";
    labelOptions.innerText = "Choose your option";
}

function textareaFunction(textarea) {
    textarea.style.backgroundColor = secondaryBackgroundColor;
    textarea.style.color = "white";
    textarea.style.borderRadius = "10px";
    textarea.style.borderColor = "white";
    textarea.style.padding = "0.25rem";
}

function inputFunction(input) {
    input.forEach((input) => {
        input.style.borderRadius = "10px";
        input.style.borderColor = "white";
        input.style.padding = "0.25rem";
        input.style.backgroundColor = secondaryBackgroundColor;
        input.style.color = "white";
    })
}

function selectFunction(select) {
    select.style.padding = "0.5rem"
    select.style.backgroundColor = secondaryBackgroundColor;
    select.style.color = "white";
    select.style.borderRadius = "10px";
    select.style.borderColor = "white";
}

function optionFunction(selectOptions) {
    selectOptions.forEach((option) => {
        option.style.fontWeight = "bold"
    })
}



document.addEventListener("DOMContentLoaded", () => {
    bodyFunction(body);
    textareaFunction(textarea);
    inputFunction(input);
    labelChange();
    selectFunction(select);
    optionFunction(selectOptions);
})
