// array push pop ---> last se add aur remove respectively: ye fast hone hai compared with unshift aur shift, kyuki unko memory me pahle shift krta hota hai!!

let fruits = ["apple", "mango", "grapes"]
console.log(fruits) 
// fruits.push("banana")
// console.log(fruits)

// let poppedFruit = fruits.pop()
// console.log(fruits)

// array shift unshift
// unshift ----> starting se add krta hai
// shift -------> starting se remove krta hai

fruits.unshift("banana")
console.log(fruits)

fruits.shift()
console.log(fruits)

// primitive vs reference data type:
// primitive me ------> ek change se dursa change nhi hota: separate allocation in memory -----> store in stack!!
// num1
// num2 = num1
// num1++
// no change

// reference me hota hai: store in heap!!
// pointer aur address ka game: #different pointer but same address!!

