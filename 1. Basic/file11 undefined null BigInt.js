// undefined -> variable bna do but value nhi assign kro
// null --> kuchh nhi, but bug hai typeof ke sath #object return
//BigInt ---> max_safe_number store krane ke liye!

let firstName
console.log(typeof firstName)

let myVariable = null
console.log(myVariable)
//bug in JS:
console.log(typeof null)

let myNumber = BigInt(12)
let sameMyNumber = 123n
console.log(myNumber + sameMyNumber)