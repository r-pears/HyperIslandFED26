const form = document.querySelector('form')

form.querySelector('label[for="name"]').textContent = "Subject"
form.querySelector('label[for="email"]').textContent = "Contacts"
form.querySelector('label[for="phone"]').textContent = "Phone"
form.querySelector('label[for="message"]').textContent = "What happened"
form.querySelector('label[for="options"]').textContent = "How do you want us to contact you"
form.querySelector('label[for="radio1"]').textContent = "Return purchase"
form.querySelector('label[for="radio2"]').textContent = "Leave claim"
form.querySelector('label[for="radio3"]').textContent = "Need support"

const select = document.querySelector('[name=options]')
console.log(select)
Array.from(select.options).forEach((element, i) => {
    if (i===0){
        element.label = 'Call me back asap'
    }
    if (i===1){
        element.label = 'Schedule an appointement'
    }
    if (i===2){
        element.label = 'Send me an email'
    }
});

form.style.fontFamily = 'tahoma'
// form.style.backgroundColor = 
form.style.backgroundImage = "url('https://media.istockphoto.com/id/1974844448/sv/vektor/modern-abstract-blue-pink-and-purple-gradient-circle-line-on-dark-black-background-design.jpg?s=2048x2048&w=is&k=20&c=5lNdXeT-brQUhfe6_fR0XkN4aQdgEx8i4WbFHw-f8Jw=')"
form.style.width = '500px'
form.style.height = '500px'
form.style.color = 'white'
form.style.padding = '50px 30px'
form.style.borderRadius = '5%'
