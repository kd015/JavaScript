// let product = {
//     name : 'Tshirt',
//     price : 789,
//     rating : {
//         stars : 4.5,
//         noOfReview : 453

//     }
// }
// console.log(typeof product)
// console.log(product)
// let str = JSON.stringify(product)
// console.log(typeof str)
// console.log(str)

// let newProduct = JSON.parse(str)
// console.log(typeof newProduct)
// console.log(newProduct)



//local stroage 


// localStorage.setItem('Name','Krishna')
// localStorage.setItem('Price',789)

// let product = {
//     name : 'Tshirt',
//     price : 789,
//     rating : {
//         stars : 4.5,
//         noOfReview : 453

//     }
// }

// localStorage.setItem('product',JSON.stringify(product))
// let product2 = JSON.parse(localStorage.getItem('product'))
// console.log(product2)

// //agr remove krna hai to:
// localStorage.removeItem('Price')

// //agr sara delete haina hai!!
// localStorage.clear()

let myDate = new Date()
console.log(myDate)
console.log(myDate.getTime())
console.log(myDate.getFullYear())
console.log(myDate.getDay())
console.log(myDate.getMinutes())
console.log(myDate.getHours())



//dom:

let button = document.createElement('Button')
button.innerText = 'click me'

document.querySelector('.my-div').appendChild(button)
