const formEl = document.getElementById("form")

const nameLabel = document.getElementById("nameLabel")
const emailLabel = document.getElementById("emailLabel")
const telephoneLabel = document.getElementById("telLabel")
const messageLabel = document.getElementById("messageLabel")
const optionLabel = document.getElementById("optionLabel")

const option1 = document.getElementById("option1")
const option2 = document.getElementById("option2")
const option3 = document.getElementById("option3")

const radio1 = document.getElementById("radio1-label")
const radio2 = document.getElementById("radio2-label")
const radio3 = document.getElementById("radio3-label")

nameLabel.textContent = "Name"
emailLabel.textContent = "Mail"
telephoneLabel.textContent = "Phone number"
messageLabel.textContent = "Message"
optionLabel.textContent = "Favourite colour"

option1.textContent = "Orange"
option2.textContent = "Purple"
option3.textContent = "Green"

radio1.textContent = "Plain"
radio2.textContent = "Striped"
radio3.textContent = "Checkered"

document.body.style.backgroundColor = "Lightblue"
document.body.style.textAlign = "Center"
document.body.style.fontFamily = "Arial"

formEl.style.textAlign = "Left"
formEl.style.paddingInline = "40%"