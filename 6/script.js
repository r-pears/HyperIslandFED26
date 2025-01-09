const item = "Hellooooo"

const object = {
    size: "big",
    weight: "a lot"
}
// TODO: Set item in localStorage
localStorage.setItem("myItem", item)

// TODO: Get item from localStorage
console.log(localStorage.getItem("myItem"))

// TODO: Remove item from localStorage
localStorage.removeItem("myItem")

// TODO: Clear all items from localStorage
localStorage.clear()

// TODO: Add an object to localStorage
localStorage.setItem("myObject", JSON.stringify(object))

// TODO: Get an object from localStorage
console.log(JSON.parse(localStorage.getItem("myObject")))

// TODO: Set item in sessionStorage
sessionStorage.setItem("myItem", item)

// TODO: Get item from sessionStorage
console.log(sessionStorage.getItem("myItem"))

// TODO: Remove item from sessionStorage
sessionStorage.removeItem("myItem")

// TODO: Clear all items from sessionStorage
sessionStorage.clear()

// TODO: Add an object to sessionStorage
sessionStorage.setItem("myObject", JSON.stringify(object))

// TODO: Get an object from sessionStorage
console.log(JSON.parse(sessionStorage.getItem("myObject")))
