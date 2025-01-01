const primaryBackgroundColor = "#212830";
const primaryTextColor = "#F0F6FC";
const secondaryBackgroundColor = "#192639";

const body = document.querySelector("body");
const form = document.querySelector("form");
const label = document.querySelector("label");
const textarea = document.querySelector("textarea");
const select = document.querySelector("select");
const option = document.querySelector("option");



const radio1 = document.getElementById("radio1")
const radio2 = document.getElementById("radio2")
const radio3 = document.getElementById("radio3")


const input = document.querySelectorAll("input");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");


function bodyFunction(body) {
    body.style.display = "flex";
    body.style.justifyContent = "center";
    body.style.alignItems = "center";
    body.style.backgroundColor = primaryBackgroundColor;
    body.style.color = primaryTextColor;
    body.style.paddingTop = "1rem"
    body.style.fontFamily = "Helvetica, sans-serif"
} 

function labelFunction() {
    
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


document.addEventListener("DOMContentLoaded", () => {
    bodyFunction(body);
    labelFunction(label);
    textareaFunction(textarea);
    inputFunction(input);
    inputPlaceholder(nameInput)
})
