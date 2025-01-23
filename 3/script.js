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

const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputPhone = document.getElementById("phone");
const inputMessage = document.getElementById("message");

const select = document.getElementById("options");
const selectOptions = document.querySelectorAll("option");

const radioAll = document.getElementsByName("radioGroup")
const radio1 = document.getElementById("radio1")
const radio2 = document.getElementById("radio2")
const radio3 = document.getElementById("radio3")
const labelRadio1 = document.querySelector("label[for='radio1']");
const labelRadio2 = document.querySelector("label[for='radio2']");
const labelRadio3 = document.querySelector("label[for='radio3']");

const submit = document.querySelector("input[type='submit']")

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
    const optionText = [
        "Dragon",
        "Bear",
        "Tiger"
    ]
    selectOptions.forEach((option, index) => {
        if (optionText[index]) option.textContent = optionText[index]
    })
} 

function radioFunction() {
    labelRadio1.innerText = "I like it"
    labelRadio2.innerText = "I hate it"
    labelRadio3.innerText = "I don't know"

    const labelRadioAll = [labelRadio1, labelRadio2, labelRadio3];

    labelRadioAll.forEach((labelRadioAll) => {
        labelRadioAll.style.fontWeight = "bold"
    })

    radioAll.forEach((radioAll) => {
        radioAll.style.margin = "0.5rem"
    })
}

function submitFunction(submit) {
    submit.style.width = "100%"
    submit.style.height = "2rem"
}

function placeholderFunction() {
    inputName.placeholder = "Name Nameson"
    inputEmail.placeholder = "name@email.com"
    inputPhone.placeholder = "+ 0123 456 789"
    inputMessage.placeholder = "Write your message here..."
}

document.addEventListener("DOMContentLoaded", () => {
    bodyFunction(body);
    textareaFunction(textarea);
    inputFunction(input);
    labelChange();
    selectFunction(select);
    optionFunction(selectOptions);
    radioFunction();
    submitFunction(submit);
    placeholderFunction();
})
