// TODO: Set item in localStorage
localStorage.setItem('key', 'value');

// TODO: Get item from localStorage
const valueFromLocalStorage = localStorage.getItem('key');
console.log(valueFromLocalStorage);

// TODO: Remove item from localStorage
localStorage.removeItem('key');

// TODO: Clear all items from localStorage
localStorage.clear();

// TODO: Add an object to localStorage
const myObject = { name: 'Mohamed', age: 27 };
localStorage.setItem('myObject', JSON.stringify(myObject));

// TODO: Get an object from localStorage
const objectFromLocalStorage = JSON.parse(localStorage.getItem('myObject'));
console.log(objectFromLocalStorage);

// TODO: Set item in sessionStorage
sessionStorage.setItem('key', 'value');

// TODO: Get item from sessionStorage
const valueFromSessionStorage = sessionStorage.getItem('key');
console.log(valueFromSessionStorage);

// TODO: Remove item from sessionStorage
sessionStorage.removeItem('key');

// TODO: Clear all items from sessionStorage
sessionStorage.clear();

// TODO: Add an object to sessionStorage
const mySessionObject = { city: 'Stockholm', country: 'Sweden' };
sessionStorage.setItem('mySessionObject', JSON.stringify(mySessionObject));

// TODO: Get an object from sessionStorage
const objectFromSessionStorage = JSON.parse(sessionStorage.getItem('mySessionObject'));
console.log(objectFromSessionStorage);