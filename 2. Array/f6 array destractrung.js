// array destractring!!

const myArray = ["value1", "value2", "value3"]

// let myVar1 = myArray[0]
// let myVar2 = myArray[1]
// console.log(myVar1,myVar2)

// let [myVar1, myVar2] = myArray
// array se direct value le lega!
// console.log(myVar1,myVar2)

//baki ko newArray me krna hai to:
// let [myVar1, myVar2, ...myNewArray] = myArray
// console.log(myNewArray)

//agr kishi ko skip krna hai to!
let [myVar1, ,myVar3] = myArray
console.log(myVar1,myVar3)