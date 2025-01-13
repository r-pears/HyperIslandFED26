// TODO: Set item in localStorage

// TODO: Get item from localStorage

// TODO: Remove item from localStorage

// TODO: Clear all items from localStorage

// TODO: Add an object to localStorage

// TODO: Get an object from localStorage

// TODO: Set item in sessionStorage

// TODO: Get item from sessionStorage

// TODO: Remove item from sessionStorage

// TODO: Clear all items from sessionStorage

// TODO: Add an object to sessionStorage

// TODO: Get an object from sessionStorage

// Set item in localStorage
localStorage.setItem('key', 'value');

// Get item from localStorage
const value = localStorage.getItem('key');

// Remove item from localStorage
localStorage.removeItem('key');

// Clear all items from localStorage
localStorage.clear();

// Add an object to localStorage
const obj = { name: 'John', age: 30 };
localStorage.setItem('user', JSON.stringify(obj));

// Get an object from localStorage
const user = JSON.parse(localStorage.getItem('user'));

// Set item in sessionStorage
sessionStorage.setItem('key', 'value');

// Get item from sessionStorage
const sessionValue = sessionStorage.getItem('key');

// Remove item from sessionStorage
sessionStorage.removeItem('key');

// Clear all items from sessionStorage
sessionStorage.clear();

// Add an object to sessionStorage
const sessionObj = { name: 'Jane', age: 25 };
sessionStorage.setItem('user', JSON.stringify(sessionObj));

// Get an object from sessionStorage
const sessionUser = JSON.parse(sessionStorage.getItem('user'));