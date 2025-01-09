// TODO: Set item in localStorage
localStorage.setItem('first-name', 'John');
// TODO: Get item from localStorag
const firstName = localStorage.getItem('first-name')
console.log(name)
// TODO: Remove item from localStorage
localStorage.removeItem('name')
// TODO: Clear all items from localStorage
localStorage.clear()
// TODO: Add an object to localStorage
const objSomthing = {
  name: 'Lebron',
  hight: 210
}
localStorage.setItem('person', JSON.stringify(obj))
// TODO: Get an object from localStorage
const person = JSON.parse(localStorage.getItem('person'))
console.log(person)





// TODO: Set item in sessionStorage
sessionStorage.setItem('second-name', 'Doe');
// TODO: Get item from sessionStorage
const secondName = sessionStorage.getItem('second-name')
console.log(name)
// TODO: Remove item from sessionStorage
sessionStorage.removeItem('second-name')
// TODO: Clear all items from sessionStorage
sessionStorage.clear()
// TODO: Add an object to sessionStorage
const obj2Somthing = {
  name: 'odai',
  hight: 180
}
sessionStorage.setItem('person', JSON.stringify(object))
// TODO: Get an object from sessionStorage
const me = JSON.parse(sessionStorage.getItem('person'))
console.log(me)