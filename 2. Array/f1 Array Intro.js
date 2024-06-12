// array ------> order collection of items
// reference type!-----------> JS me object bolte hai!!

let fruits = ["apple", "mango", "grapes"]
console.log(fruits)

// array indexing
console.log(fruits[1])

// let mix = ["Name","Age", 20, 3.14]
// console.log(mix)
// console.log(typeof mix)  //object



// changing value: ----------> because array are mutable
fruits[1] = "Banana"
console.log(fruits)

// reference type!-----------> JS me object bolte hai!!

let mix = ["Name","Age", 20, 3.14]
console.log(mix)
console.log(typeof mix)  //object
console.log(Array.isArray(fruits)) // array hai ki nhi check krne ke liye!!

let obj = {} // object literal
console.log(Array.isArray(obj)) 