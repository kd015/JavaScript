//forEach

const numbers = [4,2,5,8]

// function multiplayBy2(number, index){
//     // console.log("index is", index)
//     // console.log(`${number}*2 = ${number*2}`)
//     console.log(`index is ${index} number is ${number}`)
// }
// multiplayBy2(numbers[0], 0)
// multiplayBy2(numbers[1], 1)
// multiplayBy2(numbers[2], 2)


// for(let i = 0 ; i < numbers.length ; i++){
//     // console.log(i)
//     multiplayBy2(numbers[i] , i)

// }

//same chiz forEach se kr skte hai!!
// numbers.forEach(multiplayBy2)

// anamynaous function
numbers.forEach(function(number, index){
    console.log(`index is ${index} number is ${number}`)
})
//arrow function bhi use kr skte hai!!

