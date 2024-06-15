//sort method -----> original array ko change krega

// const number = [ 2, 8, 1, 4, 9]
// const number = [ 5, 9, 1200, 400, 3000]  // ye as a string sort kr rha
//  [ 53, 57 , 49 , 52 , 51 ]  => ASCII value
// string ko sort krna  = > thorugh ASCII value
// number.sort()
// console.log(number)


// string ke case me shi sort krta hai: pahle capital wale then small wale!!

const userName = ['Krishna', 'Rohit', 'Virat','Dhoni']
userName.sort()
console.log(userName)

//sort by call back

const number = [ 5, 9, 1200, 400, 3000]
number.sort((a , b)=>{
    return a - b 
})
console.log(number)
//kaise kaam kr rha??
// +ve case: 1200, 410
// a - b  ------> 790
// a - b ---> +ve ( greater than zero ) --> b, a
// 410, 1200


//a - b ---> -ve ----> a, b
// 5, 9 -----> -4


//real example
const products = [
    {productId: 1, productName: "p1", price: 300},
    {productId: 2, productName: "p2", price: 3000},
    {productId: 3, productName: "p3", price: 200},
    {productId: 4, productName: "p4", price: 8000},
    {productId: 5, productName: "p5", price: 500},
]

//lowToHigh
const lowToHigh = products.slice(0).sort((a,b)=>{
    return a.price - b.price
})
console.log(products)
console.log(lowToHigh)