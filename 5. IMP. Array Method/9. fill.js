// fill method:
// value, start , end  -----> 2nd use me

//use 1:

const myArray = new Array(10).fill(-1)
console.log(myArray)

//use 2:

// 3 se 5 tk ko 0 krna
// ye original array ko change krta hai
const myArray2 = [1,2,3,4,5,6,7,8]
myArray2.fill(0,2,5)
console.log(myArray2)
