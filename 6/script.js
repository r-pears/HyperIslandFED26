// TODO: Set item in localStorage
localStorage.setItem("key", "value");

// TODO: Get item from localStorage
let value = localStorage.getItem("key");

// TODO: Remove item from localStorage
localStorage.removeItem("key");

// TODO: Clear all items from localStorage
localStorage.clear();

// TODO: Add an object to localStorage
const oneObject = {
  name: "John",
  age: 30,
  city: "New York",
};
const oneObjectString = JSON.stringify(oneObject); // make the object to JSON string
localStorage.setItem("name", oneObjectString);

// TODO: Get an object from localStorage
const storedObjectString = localStorage.getItem("name");
const storedObject = JSON.parse(storedObjectString);
console.log(storedObject);

// TODO: Set item in sessionStorage
sessionStorage.setItem("key", value);

// TODO: Get item from sessionStorage
sessionStorage.getItem("key");

// TODO: Remove item from sessionStorage
sessionStorage.removeItem("key");

// TODO: Clear all items from sessionStorage
sessionStorage.clear();

// TODO: Add an object to sessionStorage
const anObject = {
  name: "John",
  age: 30,
  city: "New York",
};
const anObjectString = JSON.stringify(anObject); // make the object to JSON string
sessionStorage.setItem("name", anObjectString);

// TODO: Get an object from sessionStorage
const anStoredObjectString = sessionStorage.getItem("name");
const anStoredObject = JSON.parse(anStoredObjectString);
