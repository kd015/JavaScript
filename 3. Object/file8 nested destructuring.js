const users = [
    {userId: 1, firstName: "Krishna", gender: "male"},
    {userId: 2, firstName: "Rohit", gender: "male"},
    {userId: 3, firstName: "Smriti", gender: "female"},
]

// const [user1, user2, user3] = users
// console.log(user1)

//user1 ka firstName aur user3 ka gender

// const [{firstName}, , {gender}] = users
const [{firstName: userfirstName, userId}, , {gender}] = users
// console.log(firstName)
console.log(userfirstName)
console.log(userId)
console.log(gender)