// TODO: Set item in localStorage
localStorage.setItem("age", "33");

// TODO: Get item from localStorage
let value = localStorage.getItem("age");
console.log(value); 

// TODO: Remove item from localStorage
localStorage.removeItem("age");

// TODO: Clear all items from localStorage
localStorage.clear();

// TODO: Add an object to localStorage
let object = { name: "Alexandra", age: 33 }; 
localStorage.setItem("object", JSON.stringify(object));

// TODO: Get an object from localStorage
let storedObject = JSON.parse(localStorage.getItem("object"));
console.log(storedObject.name);     

// TODO: Set item in sessionStorage
sessionStorage.setItem("name", "Alexandra");

// TODO: Get item from sessionStorage
const valueFromSessionStorage = sessionStorage.getItem("name");
console.log(valueFromSessionStorage); 

// TODO: Remove item from sessionStorage
sessionStorage.removeItem("name");

// TODO: Clear all items from sessionStorage
sessionStorage.clear();

// TODO: Add an object to sessionStorage
let sessionObject = { name: "Simon", country: "Sweden" }; 
sessionStorage.setItem("sessionObject", JSON.stringify(sessionObject));

// TODO: Get an object from sessionStorage
let storedSessionObject = JSON.parse(sessionStorage.getItem("sessionObject"));
console.log(storedSessionObject);
