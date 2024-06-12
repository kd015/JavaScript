//function declaration 
function mul(num1, num2){
  return num1 * num2
}
// const ans1 = mul(5,6)
// console.log(ans1)
console.log(mul(5,6))

//function expression 
const sum = function(num1, num2){
  return num1 + num2;
}
// const ans = sum(6,8)
// console.log(ans)
console.log(sum(6,8))

//arrow function
const add = (num1, num2) =>{
  return num1 + num2
}
// const ans3 = add(67,13)
// console.log(ans3)
console.log(add(67,13))

//arrow function with one parameter
const isEven = num => {
  return num % 2 === 0
} 
const ans4 = isEven(8)
console.log(ans4)

//arrow function with one return
const isEven2 = num2 => num2 % 2 === 0
const ans5 = isEven2(8)
console.log(ans5)

//hoisting
// --> pahle hi call kr dena: work only in function declaration: expression aur arrow me nhi work krega!

hello()
function hello(){
  console.log("Hello krishna")
}





