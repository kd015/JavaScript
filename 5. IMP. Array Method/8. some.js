// some method

const numbers = [3,5,8,9]

// kya ek bhi number even hai?/
// true: #8

const ans = numbers.some((number)=>number%2 === 0)
console.log(ans)

//real example:

const userCart = [
    {productId: 1, productName: "Mobile", price: 12000,},
    {productId: 2, productName: "Laptop", price: 32000,},
    {productId: 3, productName: "TV", price: 15000,},
    {productId: 4, productName: "macbook", price: 250000,},
]

const res = userCart.some((cartItem)=>cartItem.price > 100000)

console.log(res)