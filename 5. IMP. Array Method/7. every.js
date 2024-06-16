//every method:

const numbers = [2,4,6,8,10]
//hme check krna hai, sare element even hai??

const ans = numbers.every((number)=>number % 2 === 0)

//callback function --> true / false
// every method  ---> true / false

console.log(ans)


// real example:

const userCart = [
    {productId: 1, productName: "Mobile", price: 12000,},
    {productId: 2, productName: "Laptop", price: 32000,},
    {productId: 3, productName: "TV", price: 15000,},
]

const res = userCart.every((cartItem)=>cartItem.price < 30000)
console.log(res)