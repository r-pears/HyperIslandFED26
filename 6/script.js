// TODO: Set item in localStorage
localStorage.setItem('key', 'value');

// TODO: Get item from localStorage
const value = localStorage.getItem('key');

// TODO: Remove item from localStorage
localStorage.removeItem('key');

// TODO: Clear all items from localStorage
localStorage.clear();

// TODO: Add an object to localStorage
const obj = {
    name: 'Tehreem',
    age: '37',
    status: 'student'
};
localStorage.setItem('user', JSON.stringify(onj));

// TODO: Get an object from localStorage
const storedObj = JSON.parse(localStorage.getItem('user'));

// TODO: Set item in sessionStorage
sessionStorage.setItem('key', 'value');

// TODO: Get item from sessionStorage
const sessionValue = sessionStorage.getItem('key');

// TODO: Remove item from sessionStorage
sessionStorage.removeItem('key');

// TODO: Clear all items from sessionStorage
sessionStorage.clear();

// TODO: Add an object to sessionStorage
const sessionObj = {
    name: 'Tehreem',
    age: '37'
};
sessionStorage.setItem('user', JSON.stringify(sessionObj));

// TODO: Get an object from sessionStorage
const storedSessionObj = JSON.parse(sessionStorage.getItem('user'));
