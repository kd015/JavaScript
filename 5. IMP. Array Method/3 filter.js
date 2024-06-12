//filter method ---> filter ka call back function, hamesha boolean return krega!!  --> jb true hoga to new array me add krega!!!

const numbers = [1, 3, 2, 6, 4, 8]

// const isEven = function(number){
//     return number % 2 === 0
// }

// const evenNumbers = numbers.filter(isEven)
// console.log(evenNumbers)

// expression aur arrow function bhi use kr skte hai!!

const evenNumbers = numbers.filter((number)=>{
    return number % 2 === 0
})
console.log(evenNumbers)