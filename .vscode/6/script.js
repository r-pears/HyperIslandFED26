// Set item in localStorage
localStorage.setItem('key', 'value');

// Get item from localStorage
const item = localStorage.getItem('key');

// Remove item from localStorage
localStorage.removeItem('key');

// Clear all items from localStorage
localStorage.clear();

// Add an object to localStorage
const obj = { name: 'John', age: 30 };
localStorage.setItem('user', JSON.stringify(obj));

// Get an object from localStorage
const storedObj = JSON.parse(localStorage.getItem('user'));

// Set item in sessionStorage
sessionStorage.setItem('sessionKey', 'sessionValue');

// Get item from sessionStorage
const sessionItem = sessionStorage.getItem('sessionKey');

// Remove item from sessionStorage
sessionStorage.removeItem('sessionKey');

// Clear all items from sessionStorage
sessionStorage.clear();

// Add an object to sessionStorage
const sessionObj = { product: 'Laptop', price: 1000 };
sessionStorage.setItem('product', JSON.stringify(sessionObj));

// Get an object from sessionStorage
const storedSessionObj = JSON.parse(sessionStorage.getItem('product'));