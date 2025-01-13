// TODO: Set item in localStorage
localStorage.setItem('key', 'value');
// TODO: Get item from localStorage
localStorage.getItem('key', 'value');
// TODO: Remove item from localStorage
localStorage.removeItem('key', 'value');
// TODO: Clear all items from localStorage
localStorage.clear();
// TODO: Add an object to localStorage
let user = {
    name:'Asher',
    age:'30'
}
localStorage.setItem('user',JSON.stringify(user));
// TODO: Get an object from localStorage
let storedUser = JSON.parse(localStorage.getItem('user'))
console.log(storedUser.name);
console.log(storedUser.age);
// TODO: Set item in sessionStorage
sessionStorage.setItem('key','value');
// TODO: Get item from sessionStorage
let value = sessionStorage.getItem('key');
console.log(value);
// TODO: Remove item from sessionStorage
sessionStorage.removeItem('key');
// TODO: Clear all items from sessionStorage
sessionStorage.clear();
// TODO: Add an object to sessionStorage
let user2 = {
    name:'Asher',
    age:'30'
}
sessionStorage.setItem('user2',JSON.stringify(user2));
// TODO: Get an object from sessionStorage
let storedUser2 = JSON.parse(sessionStorage.getItem('user2'));
console.log(storedUser2.name);
console.log(storedUser2.age);
