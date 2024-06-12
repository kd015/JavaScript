//function inside function
// function hello(){
//   console.log("Hello krishna")
//   const add = function( num1, num2){
//     return num1 + num2
//   }
//   const isEven = num => num % 2 === 0
//   console.log(add(8,7))
//   console.log(isEven(18))
  
// }
  
// hello()

//lexcial scope

function hello(){
  const myVar = "KDY"
  console.log("Hello krishna")

  const insideFunc = function( ){
    // const myVar = "KD"
    // even though myVar ko comment kr rhe hai phir bhi hello ke baad wale se myVar = "KDY" le rha --> called lexcial scope: kahi se bhi mile value le lega bs: even outside function 
    console.log("Inside function", myVar)
  }
  
  insideFunc()
}
hello()
