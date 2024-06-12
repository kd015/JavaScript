//map function  call back function leta hai --->>>> map hamesha return krta hai new array. #forEach nhi krta hai
const numbers = [3,4,6,1,8]

// const square = function(number){
//     return number * number
// }

// const squareNumber = numbers.map(square)
// console.log(squareNumber)

//function expression aur arrow function bhi use kr skte hai!

// const squareNumber = numbers.map(function(number){ return number * number })
// console.log(squareNumber)

// const squareNumber = numbers.map((number, index) => {
//     return `index: ${index}, ${number * number}`
// })
// console.log(squareNumber)

//real world example

const users = [
    {firstName: "Krishna", age: 20},
    {firstName: "Rohit", age: 38},
    {firstName: "Smriti", age: 26},
    {firstName: "Virat", age: 34},
]

const userName = users.map((user)=>{
    return user.firstName

})

console.log(userName)
