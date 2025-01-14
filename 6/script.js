//quizappgoksinb.netlify.app

// TODO: Set item in localStorage
https: localStorage.setItem("key", "value");

// TODO: Get item from localStorage
const value = localStorage.getItem("key");
console.log(value);

// TODO: Remove item from localStorage
localStorage.removeItem("key");

// TODO: Clear all items from localStorage
localStorage.clear();

// TODO: Add an object to localStorage
const obj = {Car: "Audi", Model: "A5"};
localStorage.setItem("user", JSON.stringify(obj));

// TODO: Get an object from localStorage
const user = JSON.parse(localStorage.getItem("user"));
console.log(user);

// TODO: Set item in sessionStorage
sessionStorage.setItem("key", "value");

// TODO: Get item from sessionStorage
const value = sessionStorage.getItem("key");
console.log(value);

// TODO: Remove item from sessionStorage
sessionStorage.removeItem("key");

// TODO: Clear all items from sessionStorage
sessionStorage.clear();

// TODO: Add an object to sessionStorage
const obj = {name: "Adam", age: 27};
sessionStorage.setItem("user", JSON.stringify(obj));

// TODO: Get an object from sessionStorage
const user = JSON.parse(sessionStorage.getItem("user"));
console.log(user);
