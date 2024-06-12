//Reduce  call back function lega ---> 

const numbers = [1,2,3,4,5,10]

// aim: sum of all the numbers in array

// const sum = numbers.reduce((accumulator, currentValue)=>{
//     return accumulator + currentValue
// })

// accumulator, currentValue:  return
// sbse pahle accumulator ki value 1 and currentValue ki value 2
//  1              2       dono ka sum ( 3 )

// second time me: accumulator ki value return value wala ho jayeha aur currentValue ek increase ho jayega!!

//  3              3        dono ka sum ( 6 )

//  6              4         done ka sum ( 10 )
//  10             5               15
//15         10 ( itme ka value)      25

// console.log(sum)



//Real world example!!

const userCart = [
    {productId: 1, productName: "Mobile", price: 12000,},
    {productId: 2, productName: "Laptop", price: 22000,},
    {productId: 3, productName: "TV", price: 15000,},
]

const sum = userCart.reduce((accumulator, currentValue)=>{
    return accumulator + currentValue.price
}, 0 )  // 0 initial value hai!!

console.log(sum)


// sort method
// ASCII TABLE
// CHAR : ascii value