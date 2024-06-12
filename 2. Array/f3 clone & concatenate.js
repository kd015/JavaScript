// let array1 = ["items1","items2"]
// // let array3 = ["items1","items2"]
// let array2 = array1
// array3.push("items3")
// console.log(array1 === array2)
// console.log(array1)
// console.log(array2)
// console.log(array3)

//methord 1:
// let array1 = ["items1","items2"]
// // let array2 = array1.slice(0)
// let array2 = array1.slice(0).concat(["item4", "item5"])
// console.log(array1 === array2)
// console.log(array1)
// console.log(array2)

//method 2:
// let array1 = ["items1","items2"]
// let array2 = [].concat(array1)
// console.log(array1 === array2)
// console.log(array1)
// console.log(array2)

//new method 3:
//spread operator:
let array1 = ["items1","items2"]
// let array2 = [...array1]
let array2 = [...array1, "items4"]
console.log(array1 === array2)
console.log(array1)
console.log(array2)


