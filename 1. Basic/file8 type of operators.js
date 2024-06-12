//typeof operator
// data types: 
// 1) string
// 2) number
// 3) booleans
// 4) undefined
// 5) null
// 6) BigInt        7) Symbol

let age = 18
let firstName = "Krishna"
console.log(typeof age)
console.log(typeof firstName)
console.log(typeof "Krishna")

// convert number to string ---> empty string add kr do
console.log(typeof ( age + "" ))

// convert string to number ---> '+' starting me lga do 
let myStr = +"19"
console.log(typeof myStr)

//another way:
let age2 = 20
age2 = String(age2)
console.log(typeof age2)

let age3 = "21"
age3 = Number(age3)
console.log(typeof age3)

