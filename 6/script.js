// TODO: Set item in localStorage
localStorage.setItem("key", "value");

// TODO: Get item from localStorage
let getItem = localStorage.getItem("key");

// TODO: Remove item from localStorage
localStorage.removeItem("key");

// TODO: Clear all items from localStorage
localStorage.clear();

// TODO: Add an object to localStorage
let user = {
    name: "Sigrid", 
    age: "9",
};

localStorage.setItem("user", JSON.stringify(user));

// TODO: Get an object from localStorage
let getUser = JSON.parse(localStorage.getItem(user));

// TODO: Set item in sessionStorage
sessionStorage.setItem("key", "value");

// TODO: Get item from sessionStorage
let getSessionStorageItem = sessionStorage.getItem("key");

// TODO: Remove item from sessionStorage
sessionStorage.removeItem("key");

// TODO: Clear all items from sessionStorage
sessionStorage.clear();

// TODO: Add an object to sessionStorage
sessionStorage.setItem("user", JSON.stringify(user));

// TODO: Get an object from sessionStorage
let sessionStorageUser = JSON.parse(sessionStorage.getItem("user"));