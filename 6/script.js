// TODO: Set item in localStorage
localStorage.setItem('user', 'fatou');

// TODO: Get item from localStorage
console.log('user');
// TODO: Remove item from localStorage
localStorage.removeItem('user');
// TODO: Clear all items from localStorage
localStorage.clear();
// TODO: Add an object to localStorage
const person = { 
    name: "fatou",
    age: "29",
    city: "stockholm"

};
localStorage.setItem('userInfo', JSON.stringify(person));
// TODO: Get an object from localStorage
let getObject = JSON.parse(localStorage.getItem('person'));
console.log(getObject.name); 
// TODO: Set item in sessionStorage
sessionStorage.setItem('user', 'fatou');
// TODO: Get item from sessionStorage
let getMyObject = sessionStorage.getItem('user');
console.log(getMyObject);
// TODO: Remove item from sessionStorage
sessionStorage.removeItem('user');
// TODO: Clear all items from sessionStorage
sessionStorage.clear();
// TODO: Add an object to sessionStorage
const personTwo = { 
    name: "fatou",
    age: "29",
    city: "stockholm"

};
sessionStorage.setItem('userInfo', JSON.stringify(personTwo));
// TODO: Get an object from sessionStorage
let getObjectTwo = JSON.parse(sessionStorage.getItem('personTwo'));
console.log(getObject.name); 