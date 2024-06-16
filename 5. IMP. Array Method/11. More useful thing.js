//iterable:  

// jispe hum 'for of' loop lga skte hai
// e.g. string and array

// const fName = "Krishna"
// for ( let char of fName ){
//     console.log(char)
// }

// //array wala
// for ( let item of myArray ){
//     console.log(item)
// }


//array like object!!
// jinke pas length propert hoti hai
// aur index se access kr skte hai
// e.g. string

// const fName = "krishna"
// console.log(fName.length)
// console.log(fName[3])



//set: ----------> Iterable hota hai
// store data, khud ka method hota hai, no index based access, order not guranteed, only unique items

// const num = new Set([1,2,3,3])
// num.add(4) // add bhi kr skte hai
// if ( num.has(1) ){
//     console.log("1 is present")
// }
// else{
//     console.log("1 is not present")
// }
// console.log(num)

// 'for of' loop

// for ( let num1 of num ){
//     console.log(num1)
// }

//array me se unique element!!

// const myArray4 = [1,2,3,4,5,4,5,6,2,4]
// const uniqueElements = new Set(myArray4)
// console.log(uniqueElements)

//length of set:

// let length = 0
// for ( let element of uniqueElements ){
//     length++
// }
// console.log(length)

