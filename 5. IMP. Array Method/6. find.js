//find 

const myArray = ["Hello", "cat", "dog", "lion"]

// function isLength(string){
//     return string.length === 3
// }

//Array.find()

// const ans = isLength("dog")
// const ans = myArray.find(isLength)

//arrow function for this
const ans = myArray.find((string)=>string.length === 3)

// phir first occurence ko
console.log(ans)


//real example:

const users = [
    {userId : 1, userName: "Krishna"},
    {userId : 2, userName: "Rohit"},
    {userId : 3, userName: "Virat"},
]

const myUser = users.find((user)=>user.userId===2)
console.log(myUser)
