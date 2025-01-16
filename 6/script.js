// TODO: Set item in localStorage
localStorage.setItem('product', 'sunglasses')

// TODO: Get item from localStorage
const currentCategory = localStorage.getItem('category')

// TODO: Remove item from localStorage
localStorage.removeItem('video')

// TODO: Clear all items from localStorage
localStorage.clear();

// TODO: Add an object to localStorage
const accessories = {
    product: 'hat',
    color: 'black'
}
localStorage.setItem('acsessories', JSON.stringify(accessories))
console.log(accessories)
    
// TODO: Get an object from localStorage
const clothes = JSON.parse(localStorage.getItem('clothes'))

// TODO: Set item in sessionStorage
sessionStorage.setItem('personalDiscount', discount.user())

// TODO: Get item from sessionStorage
const myDiscount = sessionStorage.getItem('personalDiscount')

// TODO: Remove item from sessionStorage
sessionStorage.removeItem('summerPromo')

// TODO: Clear all items from sessionStorage
sessionStorage.clear()

// TODO: Add an object to sessionStorage
const user = {
    id: 'qwe890SOL38920456-so017345-yymmddnnnn',
    currency: 'sek'
}
sessionStorage.setItem('user', JSON.stringify(user))

// TODO: Get an object from sessionStorage
const todaysPromo = JSON.parse(sessionStorage.getItem('XmasSale'))
