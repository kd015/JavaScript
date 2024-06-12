// trim() -------------->  spaces ko remove krne ke liye
// toUpperCase()
// toLowerCase()
// slice

// kyuki string immutable hota hai: to new string me sara kuchh hoga: exiting waisa hi rhega!

let firstName = "          krishna    "
console.log(firstName.length)
let lastName = "YadaV"
firstName = firstName.trim()
console.log(firstName.length)

lastName = lastName.toUpperCase()
console.log(lastName)
lastName = lastName.toLowerCase()
console.log(lastName)

// start index 
// end index : ( last = last - 1 )
let newString = lastName.slice(1)
console.log(newString)

let newString2 = lastName.slice(2,5)
console.log(newString2)
